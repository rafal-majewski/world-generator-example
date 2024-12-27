import type {VariableName} from "./VariableName.ts";
export type VariableNameToUniformVariableLocation<VariableNameToUse extends VariableName> =
	Readonly<Record<VariableNameToUse, WebGLUniformLocation>>;
