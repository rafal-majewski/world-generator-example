import type {VariableName} from "./VariableName.ts";
import type {VariableSize} from "./VariableSize.ts";
import type {VariableSpecification} from "./VariableSpecification.ts";
import {ProgramConfiguration} from "./ProgramConfiguration.ts";
import type {ProgramWrapperConfiguration} from "./ProgramWrapperConfiguration.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import {createProgram} from "./createProgram.ts";
import {mapObjectValueWise} from "./mapObjectValueWise.ts";
import type {Serializer} from "./Serializer.ts";
import {UniformVariableSetter} from "./UniformVariableSetter.ts";
import {computeBufferData} from "./computeBufferData.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class ProgramWrapper<Scene, Vertex> implements WithoutContextDrawable<Scene> {
	public static create<
		Scene,
		Vertex,
		UniformVariableName extends VariableName,
		AttributeVariableName extends VariableName,
		VaryingVariableName extends VariableName,
		OutputVariableName extends VariableName,
	>(
		gl: WebGL2RenderingContext,
		configuration: ProgramWrapperConfiguration<
			Scene,
			Vertex,
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName,
			OutputVariableName
		>,
	) {
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		const uniformVariableNameToVariableType = mapObjectValueWise(
			configuration.uniformVariableNameToVariableSpecification,
			({type}) => type,
		);
		const attributeVariableNameToVariableType = mapObjectValueWise(
			configuration.attributeVariableNameToVariableSpecification,
			({type}) => type,
		);
		const programConfiguration = new ProgramConfiguration(
			uniformVariableNameToVariableType,
			attributeVariableNameToVariableType,
			configuration.varyingVariableNameToVariableType,
			configuration.vertexShaderGlobalSourceCode,
			configuration.vertexShaderMainContentCreator,
			configuration.vertexShaderPrecision,
			configuration.outputVariableNameToVariableType,
			configuration.fragmentShaderGlobalSourceCode,
			configuration.fragmentShaderMainContentCreator,
			configuration.fragmentShaderPrecision,
		);
		const program = createProgram(programConfiguration, gl);
		const attributeVariableNameToVariableSize = mapObjectValueWise(
			configuration.attributeVariableNameToVariableSpecification,
			({size}) => size,
		);
		const vao = gl.createVertexArray();
		const strideBytes =
			(Object.values(attributeVariableNameToVariableSize) as readonly VariableSize[]).reduce(
				(acumulatedStride, size) => acumulatedStride + size,
				0,
			) * Float32Array.BYTES_PER_ELEMENT;
		let offsetBytes = 0;
		const attributeVariableNameToVariableSizeEntries = Object.entries(
			attributeVariableNameToVariableSize,
		) as unknown as readonly (readonly [AttributeVariableName, VariableSize])[];
		gl.bindVertexArray(vao);
		for (const [name, size] of attributeVariableNameToVariableSizeEntries) {
			const location = gl.getAttribLocation(program, `a_${name}`);
			gl.enableVertexAttribArray(location);
			gl.vertexAttribPointer(location, size, gl.FLOAT, false, strideBytes, offsetBytes);
			offsetBytes += size * Float32Array.BYTES_PER_ELEMENT;
		}
		const uniformVariableNameToVariableSpecificationEntries = Object.entries(
			configuration.uniformVariableNameToVariableSpecification,
		) as unknown as readonly (readonly [UniformVariableName, VariableSpecification<Scene>])[];
		const uniformVariableSetters = uniformVariableNameToVariableSpecificationEntries.map(
			([name, specification]) => {
				const location = gl.getUniformLocation(program, `u_${name}`) as WebGLUniformLocation;
				const setter = new UniformVariableSetter(specification, location);
				return setter;
			},
		);
		const vertexSerializers = Object.values(
			configuration.attributeVariableNameToVariableSpecification,
		) as readonly Serializer<Vertex>[];
		const programWrapper = new ProgramWrapper(
			vao,
			buffer,
			program,
			uniformVariableSetters,
			configuration.trianglesSelector,
			vertexSerializers,
		);
		// gl.bindVertexArray(null);
		// gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return programWrapper;
	}
	private constructor(
		vao: WebGLVertexArrayObject,
		buffer: WebGLBuffer,
		program: WebGLProgram,
		uniformVariableSetters: readonly UniformVariableSetter<Scene>[],
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		vertexSerializers: readonly Serializer<Vertex>[],
	) {
		this.vao = vao;
		this.buffer = buffer;
		this.program = program;
		this.uniformVariableSetters = uniformVariableSetters;
		this.trianglesSelector = trianglesSelector;
		this.vertexSerializers = vertexSerializers;
	}
	private readonly vao: WebGLVertexArrayObject;
	private readonly buffer: WebGLBuffer;
	private readonly program: WebGLProgram;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly vertexSerializers: readonly Serializer<Vertex>[];
	private readonly uniformVariableSetters: readonly UniformVariableSetter<Scene>[];
	public draw(gl: WebGL2RenderingContext, scene: Scene): undefined {
		gl.useProgram(this.program);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bindVertexArray(this.vao);
		for (const setter of this.uniformVariableSetters) {
			setter.set(gl, scene);
		}
		const triangles = this.trianglesSelector(scene);
		const bufferData = computeBufferData(triangles, this.vertexSerializers);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}
