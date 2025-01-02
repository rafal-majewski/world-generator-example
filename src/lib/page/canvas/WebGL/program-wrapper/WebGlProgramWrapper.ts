import type {VariableName} from "./VariableName.ts";
import type {FragmentWebGlProgramWrapperShaderSourceCodeData} from "./FragmentWebGlProgramWrapperShaderSourceCodeData.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VertexWebGlProgramWrapperShaderSourceCodeData} from "./VertexWebGlProgramWrapperShaderSourceCodeData.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
import {computeBufferData} from "./computeBufferData.ts";
import type {VariableDefinition} from "./VariableDefinition.ts";
import {createAttributeVariableDefinitions} from "./createAttributeVariableDefinitions.ts";
import {createProgram} from "./createProgram.ts";
import {setUpAttributes} from "./setUpAttributes.ts";
import type {VariableType} from "./VariableType.ts";

export class WebGlProgramWrapper<Scene, Triangle, Vertex> {
	public static create<
		UniformVariableName extends VariableName,
		AttributeVariableName extends VariableName,
		Vertex,
		VaryingVariableName extends VariableName,
		VertexShaderPrecision extends ShaderPrecision,
		VertexShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
		OutputVariableName extends VariableName,
		FragmentShaderPrecision extends ShaderPrecision,
		FragmentShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
		Scene,
		Triangle,
	>(
		gl: WebGL2RenderingContext,
		uniformVariableNameToVariableDefinition: Readonly<
			Record<UniformVariableName, VariableDefinition<Scene>>
		>,
		attributeVariableNameToVariableDefinition: Readonly<
			Record<AttributeVariableName, VariableDefinition<Vertex>>
		>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		vertexShaderData: VertexWebGlProgramWrapperShaderSourceCodeData<
			VertexShaderPrecision,
			{
				attribute: AttributeVariableName;
				uniform: UniformVariableName;
				outputVarying: VaryingVariableName;
			},
			VertexShaderSourceCodeMainContent
		>,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
		fragmentShaderData: FragmentWebGlProgramWrapperShaderSourceCodeData<
			FragmentShaderPrecision,
			{
				uniform: UniformVariableName;
				inputVarying: VaryingVariableName;
				output: OutputVariableName;
			},
			FragmentShaderSourceCodeMainContent
		>,
		trianglesSelector: TrianglesSelector<Scene, Triangle>,
		verticesSelector: VerticesSelector<Triangle, Vertex>,
	) {
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		const uniformVariableNameToVariableDefinitionEntries = Object.entries(
			uniformVariableNameToVariableDefinition,
		) as unknown as readonly (readonly [UniformVariableName, VariableDefinition<Scene>])[];
		const uniformVariableNameToVariableType = Object.fromEntries(
			uniformVariableNameToVariableDefinitionEntries.map(
				([variableName, variableDefinition]) => [variableName, variableDefinition.type] as const,
			),
		) as Readonly<Record<UniformVariableName, VariableType>>;
		const attributeVariableNames: readonly AttributeVariableName[] = Object.keys(
			attributeVariableNameToVariableDefinition,
		) as AttributeVariableName[];
		const attributeVariableNameToVariableDefinitionEntries = Object.entries(
			attributeVariableNameToVariableDefinition,
		) as unknown as readonly (readonly [AttributeVariableName, VariableDefinition<Scene>])[];
		const attributeVariableNameToVariableType = Object.fromEntries(
			attributeVariableNameToVariableDefinitionEntries.map(
				([variableName, variableDefinition]) => [variableName, variableDefinition.type] as const,
			),
		) as Readonly<Record<AttributeVariableName, VariableType>>;
		const program = createProgram(
			uniformVariableNameToVariableType,
			attributeVariableNameToVariableType,
			varyingVariableNameToVariableType,
			vertexShaderData,
			gl,
			outputVariableNameToVariableType,
			fragmentShaderData,
		);
		const attributeVariableNameToVariableSize = Object.fromEntries(
			attributeVariableNameToVariableDefinitionEntries.map(
				([variableName, variableDefinition]) => [variableName, variableDefinition.size] as const,
			),
		) as Readonly<Record<AttributeVariableName, number>>;
		setUpAttributes(attributeVariableNameToVariableSize, gl, program);
		const attributeVariableDefinitions = createAttributeVariableDefinitions(
			attributeVariableNames,
			attributeVariableNameToVariableDefinition,
		);
		const programWrapper = new WebGlProgramWrapper(
			buffer,
			program,
			trianglesSelector,
			verticesSelector,
			attributeVariableDefinitions,
			uniformVariableNameToVariableDefinition,
		);
		return programWrapper;
	}
	private constructor(
		buffer: WebGLBuffer,
		program: WebGLProgram,
		trianglesSelector: TrianglesSelector<Scene, Triangle>,
		verticesSelector: VerticesSelector<Triangle, Vertex>,
		attributeVariableDefinitions: readonly VariableDefinition<Vertex>[],
		uniformVariableNameToVariableDefinition: Readonly<Record<string, VariableDefinition<Scene>>>,
	) {
		this.buffer = buffer;
		this.program = program;
		this.trianglesSelector = trianglesSelector;
		this.verticesSelector = verticesSelector;
		this.attributeVariableDefinitions = attributeVariableDefinitions;
		this.uniformVariableNameToVariableDefinition = uniformVariableNameToVariableDefinition;
	}
	private readonly buffer: WebGLBuffer;
	private readonly program: WebGLProgram;
	private readonly trianglesSelector: TrianglesSelector<Scene, Triangle>;
	private readonly verticesSelector: VerticesSelector<Triangle, Vertex>;
	private readonly attributeVariableDefinitions: readonly VariableDefinition<Vertex>[];
	private readonly uniformVariableNameToVariableDefinition: Readonly<Record<string, VariableDefinition<Scene>>>;

	private setUpUniforms(gl: WebGL2RenderingContext, scene: Scene): void {
		for (const [name, definition] of Object.entries(this.uniformVariableNameToVariableDefinition)) {
			const location = gl.getUniformLocation(this.program, `u_${name}`);
			if (location === null) {
				throw new Error(`Could not find uniform location for ${name}`);
			}
			const value = definition.serialize(scene);
			if (definition.size === 1) {
				gl.uniform1fv(location, value);
			} else if (definition.size === 2) {
				gl.uniform2fv(location, value);
			} else if (definition.size === 3) {
				gl.uniform3fv(location, value);
			} else if (definition.size === 4) {
				gl.uniform4fv(location, value);
			} else if (definition.size === 16) {
				gl.uniformMatrix4fv(location, false, value);
			} else {
				throw new Error(`Unsupported uniform size: ${definition.size}`);
			}
		}
	}

	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.useProgram(this.program);
		this.setUpUniforms(gl, scene);
		const triangles = this.trianglesSelector(scene);
		const bufferData = computeBufferData(
			triangles,
			this.verticesSelector,
			this.attributeVariableDefinitions,
		);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}
