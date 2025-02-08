import type {Value} from "./Value.ts";
export abstract class FloatValue implements Value {
	public abstract stringify(): string;
	public readonly type = "float";
}
