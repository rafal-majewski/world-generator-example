import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import {variableRoleToVariableKind} from "./variableRoleToVariableKind.ts";
import {variableRoleToVariablePrefix} from "./variableRoleToVariablePrefix.ts";
import type {VariableType} from "./VariableType.ts";
export function createShaderSourceCodeVariableSectionLine(
	role: VariableRole,
	type: VariableType,
	name: VariableName,
) {
	return `${variableRoleToVariableKind[role]} ${type} ${variableRoleToVariablePrefix[role]}_${name};` as const;
}
