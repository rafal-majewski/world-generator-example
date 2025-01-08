import type {VariableSpecification} from "./VariableSpecification.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {WebGlVertexShaderSourceCodeMainContentCreator} from "./WebGlVertexShaderSourceCodeMainContentCreator.ts";
import type {WebGlFragmentShaderSourceCodeMainContentCreator} from "./WebGlFragmentShaderSourceCodeMainContentCreator.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
export class WebGlProgramWrapperConfiguration<
	Scene,
	Triangle,
	Vertex,
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> {
	public constructor(
		uniformVariableNameToVariableSpecification: Readonly<
			Record<UniformVariableName, VariableSpecification<Scene>>
		>,
		attributeVariableNameToVariableSpecification: Readonly<
			Record<AttributeVariableName, VariableSpecification<Vertex>>
		>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		vertexShaderMainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		vertexShaderPrecision: ShaderPrecision,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
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
		this.vertexShaderMainContentCreator = vertexShaderMainContentCreator;
		this.vertexShaderPrecision = vertexShaderPrecision;
		this.outputVariableNameToVariableType = outputVariableNameToVariableType;
		this.fragmentShaderMainContentCreator = fragmentShaderMainContentCreator;
		this.fragmentShaderPrecision = fragmentShaderPrecision;
		this.trianglesSelector = trianglesSelector;
		this.verticesSelector = verticesSelector;
	}
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
}
