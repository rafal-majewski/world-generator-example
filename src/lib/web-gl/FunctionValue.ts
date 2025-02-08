import type {Value} from "./Value.ts";
export type FunctionValue = new (...parameters: readonly Value[]) => Value;
