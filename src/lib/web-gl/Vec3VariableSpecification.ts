import {VariableSpecification} from "./VariableSpecification.ts";
import type {Vec3} from "./Vec3.ts";
export class Vec3VariableSpecification<Datum> extends VariableSpecification<Datum> {
	private readonly valueComputer: (datum: Datum) => Vec3;
	public constructor(valueComputer: (datum: Datum) => Vec3) {
		super();
		this.valueComputer = valueComputer;
	}
	public override serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		return value;
	}
	public override readonly size = 3;
	public override readonly type = "vec3";
	protected override setUniformWithRawSerializedValue(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		rawSerializedValue: Float32Array,
	): undefined {
		gl.uniform3fv(location, rawSerializedValue);
	}
}
