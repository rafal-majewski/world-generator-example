import type {FloatValue} from "./FloatValue.ts";
import type {Vec3Value} from "./Vec3Value.ts";
import type {Vec4Value} from "./Vec4Value.ts";
export class Vec3AndFloatConstructingVec4Value implements Vec4Value {
	public readonly type = "vec4";
	private readonly firstArgument: Vec3Value;
	private readonly secondArgument: FloatValue;
	public constructor(firstArgument: Vec3Value, secondArgument: FloatValue) {
		this.firstArgument = firstArgument;
		this.secondArgument = secondArgument;
	}
	public stringify(): string {
		const stringifiedFirstArgument = this.firstArgument.stringify();
		const stringifiedSecondArgument = this.secondArgument.stringify();
		return `vec4(${stringifiedFirstArgument}, ${stringifiedSecondArgument})`;
	}
}
