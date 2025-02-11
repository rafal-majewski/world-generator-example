import type {CustomFunction} from "./CustomFunction.ts";
import type {VariableName} from "./VariableName.ts";
export type CustomFunctions = Readonly<Record<VariableName, CustomFunction>>;
