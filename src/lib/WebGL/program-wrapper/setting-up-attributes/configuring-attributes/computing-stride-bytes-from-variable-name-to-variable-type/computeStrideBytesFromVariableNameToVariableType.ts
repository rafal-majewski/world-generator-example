import type {VariableName} from "../../../../VariableName.ts";
import type {VariableNameToVariableType} from "../../../../VariableNameToVariableType.ts";
import type {VariableType} from "../../../../VariableType.ts";
import {computeStrideBytesFromVariableTypes} from "./computing-stride-bytes-from-variable-types/computeStrideBytesFromVariableTypes.ts";
export function computeStrideBytesFromVariableNameToVariableType<
	VariableNameToUse extends VariableName,
>(variableNameToVariableType: VariableNameToVariableType<VariableNameToUse>): number {
	const variableTypes: readonly VariableType[] = Object.values(variableNameToVariableType);
	const strideBytes = computeStrideBytesFromVariableTypes(variableTypes);
	return strideBytes;
}
