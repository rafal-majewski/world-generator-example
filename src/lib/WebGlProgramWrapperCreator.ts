import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableSpecification} from "./VariableSpecification.ts";
import type {VariableType} from "./VariableType.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
import type {WebGlDrawableCreator} from "./WebGlDrawableCreator.ts";
import type {WebGlFragmentShaderSourceCodeMainContentCreator} from "./WebGlFragmentShaderSourceCodeMainContentCreator.ts";
import {WebGlProgramWrapper} from "./WebGlProgramWrapper.ts";
import type {WebGlVertexShaderSourceCodeMainContentCreator} from "./WebGlVertexShaderSourceCodeMainContentCreator.ts";
export class WebGlProgramWrapperCreator<
	Scene,
	Triangle,
	Vertex,
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> implements WebGlDrawableCreator<Scene>
{
	public constructor(
		uniformVariableNameToVariableSpecification: Readonly<
			Record<UniformVariableName, VariableSpecification<Scene>>
		>,
		attributeVariableNameToVariableSpecification: Readonly<
			Record<AttributeVariableName, VariableSpecification<Vertex>>
		>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		vertexShaderGlobalSourceCode: string,
		vertexShaderMainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		vertexShaderPrecision: ShaderPrecision,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
		fragmentShaderGlobalSourceCode: string,
		fragmentShaderMainContentCreator: WebGlFragmentShaderSourceCodeMainContentCreator<
			UniformVariableName,
			VaryingVariableName,
			OutputVariableName
		>,
		fragmentShaderPrecision: ShaderPrecision,
		trianglesSelector: TrianglesSelector<Scene, Triangle>,
		verticesSelector: VerticesSelector<Triangle, Vertex>,
	) {
		this.uniformVariableNameToVariableSpecification = uniformVariableNameToVariableSpecification;
		this.attributeVariableNameToVariableSpecification =
			attributeVariableNameToVariableSpecification;
		this.varyingVariableNameToVariableType = varyingVariableNameToVariableType;
		this.vertexShaderGlobalSourceCode = vertexShaderGlobalSourceCode;
		this.vertexShaderMainContentCreator = vertexShaderMainContentCreator;
		this.vertexShaderPrecision = vertexShaderPrecision;
		this.outputVariableNameToVariableType = outputVariableNameToVariableType;
		this.fragmentShaderGlobalSourceCode = fragmentShaderGlobalSourceCode;
		this.fragmentShaderMainContentCreator = fragmentShaderMainContentCreator;
		this.fragmentShaderPrecision = fragmentShaderPrecision;
		this.trianglesSelector = trianglesSelector;
		this.verticesSelector = verticesSelector;
	}
	public readonly vertexShaderGlobalSourceCode: string;
	public readonly fragmentShaderGlobalSourceCode: string;
	public readonly uniformVariableNameToVariableSpecification: Readonly<
		Record<UniformVariableName, VariableSpecification<Scene>>
	>;
	public readonly attributeVariableNameToVariableSpecification: Readonly<
		Record<AttributeVariableName, VariableSpecification<Vertex>>
	>;
	public readonly varyingVariableNameToVariableType: Readonly<
		Record<VaryingVariableName, VariableType>
	>;
	public readonly vertexShaderMainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	public readonly vertexShaderPrecision: ShaderPrecision;
	public readonly outputVariableNameToVariableType: Readonly<
		Record<OutputVariableName, VariableType>
	>;
	public readonly fragmentShaderMainContentCreator: WebGlFragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	public readonly fragmentShaderPrecision: ShaderPrecision;
	public readonly trianglesSelector: TrianglesSelector<Scene, Triangle>;
	public readonly verticesSelector: VerticesSelector<Triangle, Vertex>;
	public create(gl: WebGL2RenderingContext): WebGlProgramWrapper<Scene, Triangle, Vertex> {
		const programWrapper = WebGlProgramWrapper.create(gl, {
			uniformVariableNameToVariableSpecification: this.uniformVariableNameToVariableSpecification,
			attributeVariableNameToVariableSpecification:
				this.attributeVariableNameToVariableSpecification,
			varyingVariableNameToVariableType: this.varyingVariableNameToVariableType,
			vertexShaderGlobalSourceCode: this.vertexShaderGlobalSourceCode,
			vertexShaderMainContentCreator: this.vertexShaderMainContentCreator,
			vertexShaderPrecision: this.vertexShaderPrecision,
			outputVariableNameToVariableType: this.outputVariableNameToVariableType,
			fragmentShaderGlobalSourceCode: this.fragmentShaderGlobalSourceCode,
			fragmentShaderMainContentCreator: this.fragmentShaderMainContentCreator,
			fragmentShaderPrecision: this.fragmentShaderPrecision,
			trianglesSelector: this.trianglesSelector,
			verticesSelector: this.verticesSelector,
		});
		return programWrapper;
	}
}
