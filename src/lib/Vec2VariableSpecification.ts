import {VariableSpecification} from "./VariableSpecification.ts";
import type {Vec2} from "./Vec2.ts";
export class Vec2VariableSpecification<Datum> extends VariableSpecification<Datum> {
	private readonly valueComputer: (datum: Datum) => Vec2;
	public constructor(valueComputer: (datum: Datum) => Vec2) {
		super();
		this.valueComputer = valueComputer;
	}
	public override serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		return value;
	}
	public override readonly size = 2;
	public override readonly type = "vec2";
	protected override setUniformWithRawSerializedValue(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		rawSerializedValue: Float32Array,
	): void {
		gl.uniform2fv(location, rawSerializedValue);
	}
}
