import type {VariableName} from "../variable-name/VariableName.ts";
import type {VariableType} from "../variable-type/VariableType.ts";
export type VariableNameToVariableType<VariableNameToUse extends VariableName> = Readonly<
	Record<VariableNameToUse, VariableType>
>;
