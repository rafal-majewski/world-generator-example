import type {VariableName} from "../../../../variable-name/VariableName.ts";
import type {VariableNameToVariableType} from "../../../../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {VariableType} from "../../../../variable-type/VariableType.ts";
import {computeStrideBytesFromVariableTypes} from "./computing-stride-bytes-from-variable-types/computeStrideBytesFromVariableTypes.ts";
export function computeStrideBytesFromVariableNameToVariableType<
	VariableNameToUse extends VariableName,
>(variableNameToVariableType: VariableNameToVariableType<VariableNameToUse>): number {
	const variableTypes: readonly VariableType[] = Object.values(variableNameToVariableType);
	const strideBytes = computeStrideBytesFromVariableTypes(variableTypes);
	return strideBytes;
}
