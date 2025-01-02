import {createShaderSourceCodeVariableLines} from "./createShaderSourceCodeVariableLines.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {VariableType} from "./VariableType.ts";
export function createShaderSourceCodeVariableSection<
	VariableRoleToUse extends VariableRole,
	VariableNameToUse extends VariableName,
>(
	variableRole: VariableRoleToUse,
	variableNameToVariableType: Readonly<Record<VariableNameToUse, VariableType>>,
): string {
	const variableLines = createShaderSourceCodeVariableLines(
		variableRole,
		variableNameToVariableType,
	);
	const variableSection = variableLines.join("\n");
	return variableSection;
}
