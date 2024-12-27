import type {VariableName} from "../variable-name/VariableName.ts";
export type VariableNameToAttributeVariableLocation<VariableNameToUse extends VariableName> =
	Readonly<Record<VariableNameToUse, GLint>>;
