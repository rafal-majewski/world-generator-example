import {Mat4TimesVec4Operator} from "./Mat4TimesVec4Operator.ts";
import type {Value} from "./Value.ts";
import type {Vec4Value} from "./Vec4Value.ts";
export abstract class Mat4Value implements Value {
	public readonly type = "mat4";
	public abstract stringify(): string;
	public timesVec4(other: Vec4Value): Vec4Value {
		return new Mat4TimesVec4Operator(this, other);
	}
}
