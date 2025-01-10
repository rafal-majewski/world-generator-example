import type {FragmentShaderVariableRole} from "./FragmentVariableRole.ts";
import type {ShaderSourceCodeMainContentCreator} from "./ShaderSourceCodeMainContentCreator.ts";
import type {VariableName} from "./VariableName.ts";
export type FragmentShaderSourceCodeMainContentCreator<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> = ShaderSourceCodeMainContentCreator<
	FragmentShaderVariableRole,
	Readonly<{
		uniform: UniformVariableName;
		inputVarying: VaryingVariableName;
		output: OutputVariableName;
	}>
>;
