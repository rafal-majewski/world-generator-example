import type {VariableSpecification} from "./VariableSpecification.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {VertexShaderSourceCodeMainContentCreator} from "./VertexShaderSourceCodeMainContentCreator.ts";
import type {FragmentShaderSourceCodeMainContentCreator} from "./FragmentShaderSourceCodeMainContentCreator.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
export type ProgramWrapperConfiguration<
	Scene,
	Vertex,
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> = Readonly<{
	uniformVariableNameToVariableSpecification: Readonly<
		Record<UniformVariableName, VariableSpecification<Scene>>
	>;
	attributeVariableNameToVariableSpecification: Readonly<
		Record<AttributeVariableName, VariableSpecification<Vertex>>
	>;
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>;
	vertexShaderGlobalSourceCode: string;
	vertexShaderMainContentCreator: VertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	vertexShaderPrecision: ShaderPrecision;
	outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>;
	fragmentShaderGlobalSourceCode: string;
	fragmentShaderMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	fragmentShaderPrecision: ShaderPrecision;
	trianglesSelector: TrianglesSelector<Scene, Vertex>;
}>;
