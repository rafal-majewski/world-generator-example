import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {variableRoleToVariableKind} from "./variableRoleToVariableKind.ts";
import type {variableRoleToVariablePrefix} from "./variableRoleToVariablePrefix.ts";
export type ShaderSourceCodeMainContentCreatorVariableParameter<
	VariableRoleToUse extends VariableRole,
	VariableRoleToVariableName extends Record<VariableRoleToUse, VariableName>,
> = Readonly<{
	[CurrentVariableRole in VariableRoleToUse as `${(typeof variableRoleToVariableKind)[CurrentVariableRole]}s`]: Readonly<{
		[CurrentVariableName in VariableRoleToVariableName[CurrentVariableRole]]: `${(typeof variableRoleToVariablePrefix)[CurrentVariableRole]}_${CurrentVariableName}`;
	}>;
}>;
