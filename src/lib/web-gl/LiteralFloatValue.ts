import type {FloatValue} from "./FloatValue.ts";
export class LiteralFloatValue implements FloatValue {
	public readonly type = "float";
	private readonly value: number;
	public constructor(value: number) {
		this.value = value;
	}
	public stringify(): string {
		const stringifiedValue = this.value.toFixed(20).replace(/(?<=0)0+$/, "");
		return stringifiedValue;
	}
}
