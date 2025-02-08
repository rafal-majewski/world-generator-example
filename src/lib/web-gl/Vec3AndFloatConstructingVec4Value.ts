import type {FloatValue} from "./FloatValue.ts";
import type {Vec3Value} from "./Vec3Value.ts";
import {Vec4Value} from "./Vec4Value.ts";
export class Vec3AndFloatConstructingVec4Value extends Vec4Value {
	private readonly firstArgument: Vec3Value;
	private readonly secondArgument: FloatValue;
	public constructor(firstArgument: Vec3Value, secondArgument: FloatValue) {
		super();
		this.firstArgument = firstArgument;
		this.secondArgument = secondArgument;
	}
	public stringify(): string {
		const stringifiedFirstArgument = this.firstArgument.stringify();
		const stringifiedSecondArgument = this.secondArgument.stringify();
		return `vec4(${stringifiedFirstArgument}, ${stringifiedSecondArgument})`;
	}
}
