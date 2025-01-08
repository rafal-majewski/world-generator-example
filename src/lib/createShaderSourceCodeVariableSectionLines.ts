import {createShaderSourceCodeVariableSectionLine} from "./createShaderSourceCodeVariableSectionLine.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {VariableType} from "./VariableType.ts";
export function createShaderSourceCodeVariableSectionLines(
	role: VariableRole,
	nameToType: Readonly<Record<VariableName, VariableType>>,
) {
	const nameToTypeEntries: readonly [VariableName, VariableType][] = Object.entries(nameToType);
	const variableLines = nameToTypeEntries.map(([name, type]) =>
		createShaderSourceCodeVariableSectionLine(role, type, name),
	);
	return variableLines;
}
