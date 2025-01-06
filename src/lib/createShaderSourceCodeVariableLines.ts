import {createShaderSourceCodeVariableLine} from "./createShaderSourceCodeVariableLine.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {VariableType} from "./VariableType.ts";
export function createShaderSourceCodeVariableLines<
	VariableRoleToUse extends VariableRole,
	VariableNameToUse extends VariableName,
>(
	variableRole: VariableRoleToUse,
	variableNameToVariableType: Readonly<Record<VariableNameToUse, VariableType>>,
) {
	const variableEntries: readonly [string, VariableType][] = Object.entries(
		variableNameToVariableType,
	);
	const variableLines = variableEntries.map(([name, type]) =>
		createShaderSourceCodeVariableLine(variableRole, type, name),
	);
	return variableLines;
}
