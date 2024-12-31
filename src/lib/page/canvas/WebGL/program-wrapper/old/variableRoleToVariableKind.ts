import type {VariableRole} from "../../../../creating-shaders-source-code/variable-role/VariableRole.ts";
import type {VariableKind} from "./VariableKind.ts";
export const variableRoleToVariableKind = {
	attribute: "in",
	inputVarying: "in",
	output: "out",
	outputVarying: "out",
	uniform: "uniform",
} as const satisfies Record<VariableRole, VariableKind>;
