import {BoolValue} from "./BoolValue.ts";
import type {FloatValue} from "./FloatValue.ts";
export class LowerThanOperator extends BoolValue {
	private readonly leftOperand: FloatValue;
	private readonly rightOperand: FloatValue;
	public constructor(leftOperand: FloatValue, rightOperand: FloatValue) {
		super();
		this.leftOperand = leftOperand;
		this.rightOperand = rightOperand;
	}
	public override stringify(): string {
		const stringifiedLeftOperand = this.leftOperand.stringify();
		const stringifiedRightOperand = this.rightOperand.stringify();
		return `(${stringifiedLeftOperand} < ${stringifiedRightOperand})`;
	}
}
