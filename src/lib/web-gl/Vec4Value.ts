import type {Value} from "./Value.ts";
export abstract class Vec4Value implements Value {
	public readonly type = "vec4";
	public abstract stringify(): string;
}
