import type {VariableName} from "../../../../variable-name/VariableName.ts";
import type {VariableRole} from "../../../creating-shaders-source-code/variable-role/VariableRole.ts";
import type {VariableType} from "../../../../variable-type/VariableType.ts";
import {variableRoleToVariableKind} from "./variableRoleToVariableKind.ts";
import {variableRoleToVariablePrefix} from "../variableRoleToVariablePrefix.ts";
export function createShaderSourceCodeVariableLine<
	RoleToUse extends VariableRole,
	TypeToUse extends VariableType,
	NameToUse extends VariableName,
>(role: RoleToUse, type: TypeToUse, name: NameToUse) {
	return `${variableRoleToVariableKind[role]} ${type} ${variableRoleToVariablePrefix[role]}_${name};` as const;
}
