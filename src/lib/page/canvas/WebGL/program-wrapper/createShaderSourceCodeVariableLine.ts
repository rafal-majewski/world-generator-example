import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import {variableRoleToVariableKind} from "./variableRoleToVariableKind.ts";
import {variableRoleToVariablePrefix} from "./variableRoleToVariablePrefix.ts";
import type {VariableType} from "./VariableType.ts";
export function createShaderSourceCodeVariableLine<
	RoleToUse extends VariableRole,
	TypeToUse extends VariableType,
	NameToUse extends VariableName,
>(role: RoleToUse, type: TypeToUse, name: NameToUse) {
	return `${variableRoleToVariableKind[role]} ${type} ${variableRoleToVariablePrefix[role]}_${name};` as const;
}
