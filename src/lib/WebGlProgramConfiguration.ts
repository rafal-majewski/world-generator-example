import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlFragmentShaderConfiguration} from "./WebGlFragmentShaderConfiguration.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
import type {WebGlVertexShaderConfiguration} from "./WebGlVertexShaderConfiguration.ts";
export interface WebGlProgramConfiguration<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> extends WebGlVertexShaderConfiguration<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		WebGlFragmentShaderConfiguration<UniformVariableName, VaryingVariableName, OutputVariableName> {
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>;
	createVertexShaderMainContent: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"uniform" | "attribute" | "outputVarying",
		Readonly<{
			uniform: UniformVariableName;
			attribute: AttributeVariableName;
			outputVarying: VaryingVariableName;
		}>
	>;
	vertexShaderPrecision: ShaderPrecision;
	outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>;
	createFragmentShaderMainContent: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"uniform" | "output" | "inputVarying",
		Readonly<{
			uniform: UniformVariableName;
			output: OutputVariableName;
			inputVarying: VaryingVariableName;
		}>
	>;
	fragmentShaderPrecision: ShaderPrecision;
}
