import type {Value} from "./Value.ts";
export abstract class BoolValue implements Value {
	public readonly type = "bool";
	public abstract stringify(): string;
}
