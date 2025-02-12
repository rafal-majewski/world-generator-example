import {FloatValue} from "./FloatValue.ts";
export class LiteralFloatValue extends FloatValue {
	private readonly value: number;
	public constructor(value: number) {
		super();
		this.value = value;
	}
	public override stringify(): string {
		const stringifiedValue = this.value.toFixed(20).replace(/(?<=0)0+$/, "");
		return stringifiedValue;
	}
}
