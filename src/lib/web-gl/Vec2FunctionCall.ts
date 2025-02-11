import type {FloatValue} from "./FloatValue.ts";
import type {Vec2Value} from "./Vec2Value.ts";
export class Vec2FunctionCall implements Vec2Value {
	public readonly type = "vec2";
	private readonly firstArgument: FloatValue;
	private readonly secondArgument: FloatValue;
	public constructor(firstArgument: FloatValue, secondArgument: FloatValue) {
		this.firstArgument = firstArgument;
		this.secondArgument = secondArgument;
	}
	public stringify() {
		const stringifiedFirstArgument = this.firstArgument.stringify();
		const stringifiedSecondArgument = this.secondArgument.stringify();
		return `vec2(${stringifiedFirstArgument}, ${stringifiedSecondArgument})` as const;
	}
}
