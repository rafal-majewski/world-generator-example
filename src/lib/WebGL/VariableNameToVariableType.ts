import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";

export type VariableNameToVariableType<VariableNameToUse extends VariableName> = Readonly<
	Record<VariableNameToUse, VariableType>
>;
