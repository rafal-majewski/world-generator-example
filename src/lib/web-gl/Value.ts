import type {VariableType} from "./VariableType.ts";
export interface Value {
	stringify(): string;
	readonly type: VariableType;
}
