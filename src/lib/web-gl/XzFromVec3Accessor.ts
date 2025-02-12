import {Vec2Value} from "./Vec2Value.ts";
import type {Vec3Value} from "./Vec3Value.ts";
export class XzFromVec3Accessor extends Vec2Value {
	private readonly datum: Vec3Value;
	public constructor(datum: Vec3Value) {
		super();
		this.datum = datum;
	}
	public override stringify(): string {
		const stringifiedDatum = this.datum.stringify();
		return `(${stringifiedDatum}.xz)`;
	}
}
