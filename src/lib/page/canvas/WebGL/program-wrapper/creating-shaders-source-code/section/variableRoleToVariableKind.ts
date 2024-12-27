import type {VariableKind} from "../variable-kind/VariableKind.ts";
import type {VariableRole} from "../VariableRole.ts";
export const variableRoleToVariableKind = {
	attribute: "in",
	inputVarying: "in",
	output: "out",
	outputVarying: "out",
	uniform: "uniform",
} as const satisfies Record<VariableRole, VariableKind>;
