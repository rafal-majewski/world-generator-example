import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
export type WebGlProgramWrapperShaderSourceCodeData<
	PrecisionToUse extends ShaderPrecision,
	VariableRoleToUse extends VariableRole,
	VariableRoleToVariableName extends Record<VariableRoleToUse, VariableName>,
	SourceCodeMainContentToUse extends ShaderSourceCodeMainContent,
> = Readonly<{
	precision: PrecisionToUse;
	createMainContent: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		VariableRoleToUse,
		VariableRoleToVariableName,
		SourceCodeMainContentToUse
	>;
}>;
