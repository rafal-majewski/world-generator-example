import type {VariablePrefix} from "../VariablePrefix.ts";
import type {VariableRole} from "../VariableRole.ts";
export const variableRoleToVariablePrefix = {
	attribute: "a",
	inputVarying: "v",
	output: "o",
	outputVarying: "v",
	uniform: "u",
} as const satisfies Record<VariableRole, VariablePrefix>;
