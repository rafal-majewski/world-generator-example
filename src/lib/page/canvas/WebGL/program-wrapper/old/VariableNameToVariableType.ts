import type {VariableName} from "../VariableName.ts";
import type {VariableType} from "../../variable-type/VariableType.ts";
export type VariableNameToVariableType = Readonly<Record<VariableName, VariableType>>;
