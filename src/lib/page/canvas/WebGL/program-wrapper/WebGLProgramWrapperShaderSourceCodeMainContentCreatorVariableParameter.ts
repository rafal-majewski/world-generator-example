import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {variableRoleToVariablePrefix} from "./variableRoleToVariablePrefix.ts";
export type WebGLProgramWrapperShaderSourceCodeMainContentCreatorVariableParameter<
	VariableRoleToUse extends VariableRole,
	VariableRoleToVariableName extends Record<VariableRoleToUse, VariableName>,
> = Readonly<{
	[CurrentVariableRole in VariableRoleToUse]: Readonly<{
		[CurrentVariableName in VariableRoleToVariableName[CurrentVariableRole]]: `${(typeof variableRoleToVariablePrefix)[CurrentVariableRole]}_${CurrentVariableName}`;
	}>;
}>;
