import {createShaderSourceCodeVariableSectionLines} from "./createShaderSourceCodeVariableSectionLines.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {VariableType} from "./VariableType.ts";
export function createShaderSourceCodeVariableSection(
	variableRole: VariableRole,
	variableNameToVariableType: Readonly<Record<VariableName, VariableType>>,
): string {
	const lines = createShaderSourceCodeVariableSectionLines(
		variableRole,
		variableNameToVariableType,
	);
	const section = lines.join("\n");
	return section;
}
