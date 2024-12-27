import type {VariableType} from "../../../../variable-type/VariableType.ts";
import {createShaderSourceCodeVariableLine} from "./line/createShaderSourceCodeVariableLine.ts";
import type {VariableRole} from "../../VariableRole.ts";
import type {VariableNameToVariableType} from "../../../../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {VariableName} from "../../../../variable-name/VariableName.ts";
export function createShaderSourceCodeVariableLines<
	VariableRoleToUse extends VariableRole,
	VariableNameToUse extends VariableName,
	VariableNameToVariableTypeToUse extends VariableNameToVariableType<VariableNameToUse>,
>(variableRole: VariableRoleToUse, variableNameToVariableType: VariableNameToVariableTypeToUse) {
	const variableEntries: readonly [string, VariableType][] = Object.entries(
		variableNameToVariableType,
	);
	const variableLines = variableEntries.map(([name, type]) =>
		createShaderSourceCodeVariableLine(variableRole, type, name),
	);
	return variableLines;
}
