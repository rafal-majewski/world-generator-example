import {FloatValue} from "./FloatValue.ts";
import type {Vec2Value} from "./Vec2Value.ts";
export class XFromVec2Accessor extends FloatValue {
	private readonly datum: Vec2Value;
	public constructor(datum: Vec2Value) {
		super();
		this.datum = datum;
	}
	public override stringify(): string {
		const stringifiedDatum = this.datum.stringify();
		return `(${stringifiedDatum}.x)`;
	}
}
