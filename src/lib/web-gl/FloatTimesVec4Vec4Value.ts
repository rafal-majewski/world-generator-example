import type {FloatValue} from "./FloatValue.ts";
import type {Vec4Value} from "./Vec4Value.ts";
export class FloatTimesVec4Vec4Value implements Vec4Value {
	public readonly type = "vec4";
	private readonly leftOperand: FloatValue;
	private readonly rightOperand: Vec4Value;
	public constructor(leftOperand: FloatValue, rightOperand: Vec4Value) {
		this.leftOperand = leftOperand;
		this.rightOperand = rightOperand;
	}
	public stringify() {
		const stringifiedLeftOperand = this.leftOperand.stringify();
		const stringifiedRightOperand = this.rightOperand.stringify();
		return `(${stringifiedLeftOperand} * ${stringifiedRightOperand})` as const;
	}
}
