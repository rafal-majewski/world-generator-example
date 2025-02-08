import type {VariableType} from "./VariableType.ts";
export interface Value {
	stringify(): string;
	type: VariableType;
}
