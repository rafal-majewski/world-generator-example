import type {VariableName} from "./VariableName.ts";
export type VariableNameToAttributeVariableLocation<VariableNameToUse extends VariableName> =
	Readonly<Record<VariableNameToUse, GLint>>;
