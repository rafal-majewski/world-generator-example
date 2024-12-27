import {createShaderSourceCodeVariableLines} from "./createShaderSourceCodeVariableLines.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";
import type {VariableRole} from "./VariableRole.ts";
export function createShaderSourceCodeVariableSection<
	VariableRoleToUse extends VariableRole,
	VariableNameToUse extends VariableName,
	VariableNameToVariableTypeToUse extends VariableNameToVariableType<VariableNameToUse>,
>(variableRole: VariableRoleToUse, variableNameToVariableType: VariableNameToVariableTypeToUse) {
	const variableLines = createShaderSourceCodeVariableLines(
		variableRole,
		variableNameToVariableType,
	);
	const variableSection = variableLines.join("\n");
	return variableSection;
}
