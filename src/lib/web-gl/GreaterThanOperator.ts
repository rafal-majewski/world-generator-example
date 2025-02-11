import type {FloatValue} from "./FloatValue.ts";
import type {Vec4Value} from "./Vec4Value.ts";
export class GreaterThanOperator implements Vec4Value {
	public readonly type = "bool";
	private readonly leftOperand: FloatValue;
	private readonly rightOperand: FloatValue;
	public constructor(leftOperand: FloatValue, rightOperand: FloatValue) {
		this.leftOperand = leftOperand;
		this.rightOperand = rightOperand;
	}
	public stringify(): string {
		const stringifiedLeftOperand = this.leftOperand.stringify();
		const stringifiedRightOperand = this.rightOperand.stringify();
		return `(${stringifiedLeftOperand} > ${stringifiedRightOperand})`;
	}
}
