import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
export interface WebGlFragmentShaderConfiguration<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> {
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>;
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
