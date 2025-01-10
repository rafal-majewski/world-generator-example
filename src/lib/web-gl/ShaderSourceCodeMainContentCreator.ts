import type {VariableName} from "./VariableName.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {ShaderSourceCodeMainContentCreatorVariableParameter} from "./ShaderSourceCodeMainContentCreatorVariableParameter.ts";
export type ShaderSourceCodeMainContentCreator<
	VariableRoleToUse extends VariableRole,
	VariableRoleToVariableName extends Record<VariableRoleToUse, VariableName>,
> = (
	variables: ShaderSourceCodeMainContentCreatorVariableParameter<
		VariableRoleToUse,
		VariableRoleToVariableName
	>,
) => ShaderSourceCodeMainContent;
