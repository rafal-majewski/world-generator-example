import {FloatValue} from "./FloatValue.ts";
export class SinFloatValue extends FloatValue {
	private readonly angleRadians: FloatValue;
	public constructor(angleRadians: FloatValue) {
		super();
		this.angleRadians = angleRadians;
	}
	public stringify() {
		const stringifiedAngleRadians = this.angleRadians.stringify();
		return `sin(${stringifiedAngleRadians})` as const;
	}
}
