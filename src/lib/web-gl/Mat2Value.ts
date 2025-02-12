import type {Value} from "./Value.ts";
export abstract class Mat2Value implements Value {
	public readonly type = "mat2";
	public abstract stringify(): string;
}
