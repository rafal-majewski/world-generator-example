import {variableTypeToVariableSize} from "../variable-type-to-variable-size/variableTypeToVariableSize.ts";
import type {VariableName} from "../VariableName.ts";
import type {VariableNameToAttributeVariableLocation} from "./VariableNameToAttributeVariableLocation.ts";
import type {VariableNameToVariableType} from "../variable-name-to-variable-type/VariableNameToVariableType.ts";
import {computeStrideBytesFromVariableNameToVariableType} from "./computing-stride-bytes-from-variable-name-to-variable-type/computeStrideBytesFromVariableNameToVariableType.ts";
export function configureAttributes<VariableNameToUse extends VariableName>(
	variableNameToVariableType: VariableNameToVariableType<VariableNameToUse>,
	variableNames: readonly VariableNameToUse[],
	variableNameToVariableLocation: VariableNameToAttributeVariableLocation<VariableNameToUse>,
	gl: WebGL2RenderingContext,
): void {
	const strideBytes = computeStrideBytesFromVariableNameToVariableType(variableNameToVariableType);
	let offsetBytes = 0;
	for (const name of variableNames) {
		const variableLocation = variableNameToVariableLocation[name];
		const variableSize = variableTypeToVariableSize[variableNameToVariableType[name]];
		gl.enableVertexAttribArray(variableLocation);
		gl.vertexAttribPointer(
			variableLocation,
			variableSize,
			gl.FLOAT,
			false,
			strideBytes,
			offsetBytes,
		);
		offsetBytes += variableSize * Float32Array.BYTES_PER_ELEMENT;
	}
}
