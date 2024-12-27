import type {VariableName} from "../../../variable-name/VariableName.ts";
export type VariableNameToUniformVariableLocation<VariableNameToUse extends VariableName> =
	Readonly<Record<VariableNameToUse, WebGLUniformLocation>>;
