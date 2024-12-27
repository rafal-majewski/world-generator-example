import type {VariableNameToVariableType} from "../../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {VariableName} from "../../variable-name/VariableName.ts";
import type {VariableNameToAttributeVariableLocation} from "../VariableNameToAttributeVariableLocation.ts";
import {computeVariableNameToAttributeVariableLocationFromVariableNames} from "./computing-variable-name-to-attribute-variable-location-from-attribute-names/computeVariableNameToAttributeVariableLocationFromVariableNames.ts";
import {configureAttributes} from "./configuring-attributes/configureAttributes.ts";
export function setUpAttributes<VariableNameToUse extends VariableName>(
	variableNameToVariableType: VariableNameToVariableType<VariableNameToUse>,
	gl: WebGL2RenderingContext,
	program: WebGLProgram,
): void {
	const variableNames: readonly VariableNameToUse[] = Object.keys(
		variableNameToVariableType,
	) as VariableNameToUse[];
	const variableNameToVariableLocation: VariableNameToAttributeVariableLocation<VariableNameToUse> =
		computeVariableNameToAttributeVariableLocationFromVariableNames(variableNames, gl, program);
	configureAttributes(
		variableNameToVariableType,
		variableNames,
		variableNameToVariableLocation,
		gl,
	);
}
