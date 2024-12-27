import type {VariableName} from "../../../VariableName.ts";
import type {VariableNameToAttributeVariableLocation} from "../../../VariableNameToAttributeVariableLocation.ts";
export function computeVariableNameToAttributeVariableLocationFromVariableNames<
	VariableNameToUse extends VariableName,
>(
	variableNames: readonly VariableNameToUse[],
	gl: WebGL2RenderingContext,
	program: WebGLProgram,
): VariableNameToAttributeVariableLocation<VariableNameToUse> {
	const variableNameToAttributeVariableLocation = Object.fromEntries(
		variableNames.map((name) => [name, gl.getAttribLocation(program, `a_${name}`)]),
	) as VariableNameToAttributeVariableLocation<VariableNameToUse>;
	return variableNameToAttributeVariableLocation;
}
