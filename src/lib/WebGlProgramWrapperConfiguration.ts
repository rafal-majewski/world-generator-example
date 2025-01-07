import type {VariableName} from "./VariableName.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableDefinition} from "./VariableDefinition.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlProgramWrapperSerializers} from "./WebGlProgramWrapperSerializers.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
import type {WebGlProgramConfiguration} from "./WebGlProgramConfiguration.ts";
export interface WebGlProgramWrapperConfiguration<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	Vertex,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
	Scene,
	Triangle,
> extends WebGlProgramWrapperSerializers<Vertex, Scene, Triangle>,
		WebGlProgramConfiguration<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName,
			OutputVariableName
		> {
	uniformVariableNameToVariableDefinition: Readonly<
		Record<UniformVariableName, VariableDefinition<Scene>>
	>;
	attributeVariableNameToVariableDefinition: Readonly<
		Record<AttributeVariableName, VariableDefinition<Vertex>>
	>;
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>;
	vertexShaderPrecision: ShaderPrecision;
	createVertexShaderMainContent: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"attribute" | "uniform" | "outputVarying",
		{
			attribute: AttributeVariableName;
			uniform: UniformVariableName;
			outputVarying: VaryingVariableName;
		}
	>;
	outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>;
	fragmentShaderPrecision: ShaderPrecision;
	createFragmentShaderMainContent: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"uniform" | "inputVarying" | "output",
		{
			uniform: UniformVariableName;
			inputVarying: VaryingVariableName;
			output: OutputVariableName;
		}
	>;
}
