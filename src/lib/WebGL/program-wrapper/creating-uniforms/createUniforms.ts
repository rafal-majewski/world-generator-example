import type {VariableNameToUniformVariableLocation} from "../../VariableNameToUniformVariableLocation.ts";
import type {VariableName} from "../../VariableName.ts";
export function createUniforms<
	VariableNameToUse extends VariableName,
>(): VariableNameToUniformVariableLocation<VariableNameToUse> {}
