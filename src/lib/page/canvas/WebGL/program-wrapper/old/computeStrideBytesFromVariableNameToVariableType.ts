import type {VariableType} from "../../variable-type/VariableType.ts";
import {computeStrideBytesFromVariableTypes} from "../computeStrideBytesFromVariableTypes.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";
export function computeStrideBytesFromVariableNameToVariableType<
	VariableNameToVariableTypeToUse extends VariableNameToVariableType,
>(variableNameToVariableType: VariableNameToVariableTypeToUse): number {
	const variableTypes: readonly VariableType[] = Object.values(variableNameToVariableType);
	const strideBytes = computeStrideBytesFromVariableTypes(variableTypes);
	return strideBytes;
}
