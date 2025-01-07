import type {VariableName} from "./VariableName.ts";
import {computeBufferData} from "./computeBufferData.ts";
import type {VariableDefinition} from "./VariableDefinition.ts";
import {createAttributeVariableDefinitions} from "./createAttributeVariableDefinitions.ts";
import {createProgram} from "./createProgram.ts";
import {setUpAttributes} from "./setUpAttributes.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlProgramWrapperConfiguration} from "./WebGlProgramWrapperConfiguration.ts";
import type {WebGlProgramWrapperSerializers} from "./WebGlProgramWrapperSerializers.ts";
export class WebGlProgramWrapper<Scene, Triangle, Vertex> {
	private readonly serializers: WebGlProgramWrapperSerializers<Vertex, Scene, Triangle>;
	public static create<
		UniformVariableName extends VariableName,
		AttributeVariableName extends VariableName,
		VaryingVariableName extends VariableName,
		OutputVariableName extends VariableName,
		Vertex,
		Scene,
		Triangle,
	>(
		gl: WebGL2RenderingContext,
		configuration: WebGlProgramWrapperConfiguration<
			UniformVariableName,
			AttributeVariableName,
			Vertex,
			VaryingVariableName,
			OutputVariableName,
			Scene,
			Triangle
		>,
	) {
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		const uniformVariableNameToVariableDefinitionEntries = Object.entries(
			configuration.uniformVariableNameToVariableDefinition,
		) as unknown as readonly (readonly [UniformVariableName, VariableDefinition<Scene>])[];
		const uniformVariableNameToVariableType = Object.fromEntries(
			uniformVariableNameToVariableDefinitionEntries.map(
				([variableName, variableDefinition]) => [variableName, variableDefinition.type] as const,
			),
		) as Readonly<Record<UniformVariableName, VariableType>>;
		const attributeVariableNames: readonly AttributeVariableName[] = Object.keys(
			configuration.attributeVariableNameToVariableDefinition,
		) as AttributeVariableName[];
		const attributeVariableNameToVariableDefinitionEntries = Object.entries(
			configuration.attributeVariableNameToVariableDefinition,
		) as unknown as readonly (readonly [AttributeVariableName, VariableDefinition<Scene>])[];
		const attributeVariableNameToVariableType = Object.fromEntries(
			attributeVariableNameToVariableDefinitionEntries.map(
				([variableName, variableDefinition]) => [variableName, variableDefinition.type] as const,
			),
		) as Readonly<Record<AttributeVariableName, VariableType>>;
		const program = createProgram(
			uniformVariableNameToVariableType,
			attributeVariableNameToVariableType,
			configuration,
			gl,
		);
		const attributeVariableNameToVariableSize = Object.fromEntries(
			attributeVariableNameToVariableDefinitionEntries.map(
				([variableName, variableDefinition]) => [variableName, variableDefinition.size] as const,
			),
		) as Readonly<Record<AttributeVariableName, number>>;
		setUpAttributes(attributeVariableNameToVariableSize, gl, program);
		const attributeVariableDefinitions = createAttributeVariableDefinitions(
			attributeVariableNames,
			configuration.attributeVariableNameToVariableDefinition,
		);
		const uniformVariableLocationToVariableDefinition = new Map(
			(
				Object.entries(configuration.uniformVariableNameToVariableDefinition) as [
					keyof typeof configuration.uniformVariableNameToVariableDefinition,
					(typeof configuration.uniformVariableNameToVariableDefinition)[keyof typeof configuration.uniformVariableNameToVariableDefinition],
				][]
			).map(
				([name, definition]) =>
					[
						gl.getUniformLocation(program, `u_${name}`) as WebGLUniformLocation,
						definition,
					] as const,
			),
		);
		const programWrapper = new WebGlProgramWrapper(
			buffer,
			program,
			configuration,
			attributeVariableDefinitions,
			uniformVariableLocationToVariableDefinition,
		);
		return programWrapper;
	}
	protected constructor(
		buffer: WebGLBuffer,
		program: WebGLProgram,
		serializers: WebGlProgramWrapperSerializers<Vertex, Scene, Triangle>,
		attributeVariableDefinitions: readonly VariableDefinition<Vertex>[],
		uniformVariableLocationToVariableDefinition: ReadonlyMap<
			WebGLUniformLocation,
			VariableDefinition<Scene>
		>,
	) {
		this.buffer = buffer;
		this.program = program;
		this.serializers = serializers;
		this.attributeVariableDefinitions = attributeVariableDefinitions;
		this.uniformVariableLocationToVariableDefinition = uniformVariableLocationToVariableDefinition;
	}
	private readonly buffer: WebGLBuffer;
	private readonly program: WebGLProgram;
	private readonly attributeVariableDefinitions: readonly VariableDefinition<Vertex>[];
	private readonly uniformVariableLocationToVariableDefinition: ReadonlyMap<
		WebGLUniformLocation,
		VariableDefinition<Scene>
	>;
	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.useProgram(this.program);
		for (const [
			location,
			definition,
		] of this.uniformVariableLocationToVariableDefinition.entries()) {
			const value = definition.serialize(scene);
			definition.setUniform(gl, location, new Float32Array(value));
		}
		const triangles = this.serializers.trianglesSelector(scene);
		const bufferData = computeBufferData(
			triangles,
			this.serializers.verticesSelector,
			this.attributeVariableDefinitions,
		);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}
