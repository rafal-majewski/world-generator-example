import type {VariableName} from "./VariableName.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {WebGlShaderSourceCodeMainContentCreatorVariableParameter} from "./WebGlShaderSourceCodeMainContentCreatorVariableParameter.ts";
export type WebGlShaderSourceCodeMainContentCreator<
	VariableRoleToUse extends VariableRole,
	VariableRoleToVariableName extends Record<VariableRoleToUse, VariableName>,
> = (
	variables: WebGlShaderSourceCodeMainContentCreatorVariableParameter<
		VariableRoleToUse,
		VariableRoleToVariableName
	>,
) => ShaderSourceCodeMainContent;
