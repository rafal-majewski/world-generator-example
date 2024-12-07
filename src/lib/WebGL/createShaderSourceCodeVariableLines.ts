import type {VariableType} from "./VariableType.ts";
import {createShaderSourceCodeVariableLine} from "./createShaderSourceCodeVariableLine.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";

export function createShaderSourceCodeVariableLines<
	VariableRoleToUse extends VariableRole,
	VariableNameToVariableTypeToUse extends VariableNameToVariableType,
>(variableRole: VariableRoleToUse, variableNameToVariableType: VariableNameToVariableTypeToUse) {
	const variableEntries: readonly [string, VariableType][] = Object.entries(
		variableNameToVariableType,
	);

	const variableLines = variableEntries.map(([name, type]) =>
		createShaderSourceCodeVariableLine(variableRole, type, name),
	);

	return variableLines;
}
