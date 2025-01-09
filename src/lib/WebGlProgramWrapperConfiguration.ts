import type {VariableSpecification} from "./VariableSpecification.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {WebGlVertexShaderSourceCodeMainContentCreator} from "./WebGlVertexShaderSourceCodeMainContentCreator.ts";
import type {WebGlFragmentShaderSourceCodeMainContentCreator} from "./WebGlFragmentShaderSourceCodeMainContentCreator.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
export type WebGlProgramWrapperConfiguration<
	Scene,
	Triangle,
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
	vertexShaderMainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	vertexShaderPrecision: ShaderPrecision;
	outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>;
	fragmentShaderGlobalSourceCode: string;
	fragmentShaderMainContentCreator: WebGlFragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	fragmentShaderPrecision: ShaderPrecision;
	trianglesSelector: TrianglesSelector<Scene, Triangle>;
	verticesSelector: VerticesSelector<Triangle, Vertex>;
}>;
