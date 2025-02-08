import type {Value} from "./Value.ts";
export abstract class Mat4Value implements Value {
	public readonly type = "mat4";
	public abstract stringify(): string;
}
