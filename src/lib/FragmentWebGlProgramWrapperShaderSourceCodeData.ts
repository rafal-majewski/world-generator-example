import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {WebGlProgramWrapperShaderSourceCodeData} from "./WebGlProgramWrapperShaderSourceCodeData.ts";
import type {FragmentVariableRole} from "./FragmentVariableRole.ts";
export type FragmentWebGlProgramWrapperShaderSourceCodeData<
	PrecisionToUse extends ShaderPrecision,
	VariableRoleToVariableName extends Record<FragmentVariableRole, VariableName>,
	SourceCodeMainContentToUse extends ShaderSourceCodeMainContent,
> = WebGlProgramWrapperShaderSourceCodeData<
	PrecisionToUse,
	FragmentVariableRole,
	VariableRoleToVariableName,
	SourceCodeMainContentToUse
>;
