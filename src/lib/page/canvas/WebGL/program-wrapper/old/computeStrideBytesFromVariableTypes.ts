import type {VariableType} from "../../variable-type/VariableType.ts";
import {variableTypeToVariableSize} from "./variableTypeToVariableSize.ts";
export function computeStrideBytesFromVariableTypes(
	variableTypes: readonly VariableType[],
): number {
	const stride = variableTypes.reduce(
		(accumulatedStride, variableType) =>
			accumulatedStride + variableTypeToVariableSize[variableType],
		0,
	);
	return stride * Float32Array.BYTES_PER_ELEMENT;
}
