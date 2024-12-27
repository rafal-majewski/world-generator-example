import {variableTypeToVariableSize} from "../../../../../variableTypeToVariableSize.ts";
import type {VariableType} from "../../../../../VariableType.ts";
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
