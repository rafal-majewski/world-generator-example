import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
export type VariablesDeclarations = Readonly<Record<VariableName, VariableType>>;
