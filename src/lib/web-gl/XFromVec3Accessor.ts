import {FloatValue} from "./FloatValue.ts";
import type {Vec3Value} from "./Vec3Value.ts";
export class XFromVec3Accessor extends FloatValue {
	private readonly datum: Vec3Value;
	public constructor(datum: Vec3Value) {
		super();
		this.datum = datum;
	}
	public override stringify(): string {
		const stringifiedDatum = this.datum.stringify();
		return `(${stringifiedDatum}.x)`;
	}
}
