import type {FloatValue} from "./FloatValue.ts";
import {Vec4Value} from "./Vec4Value.ts";
export class FloatTimesVec4Vec4Value extends Vec4Value {
	private readonly leftOperand: FloatValue;
	private readonly rightOperand: Vec4Value;
	public constructor(leftOperand: FloatValue, rightOperand: Vec4Value) {
		super();
		this.leftOperand = leftOperand;
		this.rightOperand = rightOperand;
	}
	public stringify() {
		const stringifiedLeftOperand = this.leftOperand.stringify();
		const stringifiedRightOperand = this.rightOperand.stringify();
		return `(${stringifiedLeftOperand} * ${stringifiedRightOperand})` as const;
	}
}
