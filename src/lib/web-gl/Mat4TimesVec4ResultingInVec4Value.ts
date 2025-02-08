import {Mat4Value} from "./Mat4Value.ts";
import {Vec4Value} from "./Vec4Value.ts";
export class Mat4TimesVec4ResultingInVec4Value extends Vec4Value {
	private readonly leftOperand: Mat4Value;
	private readonly rightOperand: Vec4Value;
	public constructor(leftOperand: Mat4Value, rightOperand: Vec4Value) {
		super();
		this.leftOperand = leftOperand;
		this.rightOperand = rightOperand;
	}
	public stringify(): string {
		const stringifiedLeftOperand = this.leftOperand.stringify();
		const stringifiedRightOperand = this.rightOperand.stringify();
		return `(${stringifiedLeftOperand} * ${stringifiedRightOperand})`;
	}
}
