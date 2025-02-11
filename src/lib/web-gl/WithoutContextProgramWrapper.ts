import type {VariableSize} from "./VariableSize.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import {createProgram} from "./createProgram.ts";
import {mapObjectValueWise} from "./mapObjectValueWise.ts";
import {UniformVariableSetter} from "./UniformVariableSetter.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
import type {FragmentShaderSourceCode} from "./FragmentShaderSourceCode.ts";
import type {VertexShaderSourceCode} from "./VertexShaderSourceCode.ts";
import {createShader} from "./createShader.ts";
import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import {BufferDataComputer} from "./BufferDataComputer.ts";
export class WithoutContextProgramWrapper<Scene, Vertex> implements WithoutContextDrawable<Scene> {
	public static create<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
		AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Vertex>,
	>(
		gl: WebGL2RenderingContext,
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse,
		vertexShaderSourceCode: VertexShaderSourceCode,
		fragmentShaderSourceCode: FragmentShaderSourceCode,
	) {
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSourceCode);
		const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSourceCode);
		const program = createProgram(gl, vertexShader, fragmentShader);
		const attributeVariableNameToVariableSize = mapObjectValueWise(
			attributeVariablesSpecifications,
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
		);
		gl.bindVertexArray(vao);
		for (const [name, size] of attributeVariableNameToVariableSizeEntries) {
			const location = gl.getAttribLocation(program, `a_${name}`);
			gl.enableVertexAttribArray(location);
			gl.vertexAttribPointer(location, size, gl.FLOAT, false, strideBytes, offsetBytes);
			offsetBytes += size * Float32Array.BYTES_PER_ELEMENT;
		}
		const uniformVariableNameToVariableSpecificationEntries = Object.entries(
			uniformVariablesSpecifications,
		);
		const uniformVariableSetters = uniformVariableNameToVariableSpecificationEntries.map(
			([name, specification]) => {
				const location = gl.getUniformLocation(program, `u_${name}`) as WebGLUniformLocation;
				const setter = new UniformVariableSetter(specification, location);
				return setter;
			},
		);
		const bufferDataComputer = new BufferDataComputer(
			Object.values(attributeVariablesSpecifications),
		);
		const programWrapper = new WithoutContextProgramWrapper(
			vao,
			buffer,
			program,
			uniformVariableSetters,
			trianglesSelector,
			bufferDataComputer,
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
		bufferDataComputer: BufferDataComputer<Vertex>,
	) {
		this.vao = vao;
		this.buffer = buffer;
		this.program = program;
		this.uniformVariableSetters = uniformVariableSetters;
		this.trianglesSelector = trianglesSelector;
		this.bufferDataComputer = bufferDataComputer;
	}
	private readonly vao: WebGLVertexArrayObject;
	private readonly buffer: WebGLBuffer;
	private readonly program: WebGLProgram;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly bufferDataComputer: BufferDataComputer<Vertex>;
	private readonly uniformVariableSetters: readonly UniformVariableSetter<Scene>[];
	public draw(gl: WebGL2RenderingContext, scene: Scene): undefined {
		gl.useProgram(this.program);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bindVertexArray(this.vao);
		for (const setter of this.uniformVariableSetters) {
			setter.set(gl, scene);
		}
		const triangles = this.trianglesSelector(scene);
		const bufferData = this.bufferDataComputer.compute(triangles);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}
