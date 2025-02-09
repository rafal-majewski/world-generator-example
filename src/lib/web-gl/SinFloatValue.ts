import type {FloatValue} from "./FloatValue.ts";
export class SinFloatValue implements FloatValue {
	public readonly type = "float";
	private readonly angleRadians: FloatValue;
	public constructor(angleRadians: FloatValue) {
		this.angleRadians = angleRadians;
	}
	public stringify() {
		const stringifiedAngleRadians = this.angleRadians.stringify();
		return `sin(${stringifiedAngleRadians})` as const;
	}
}
