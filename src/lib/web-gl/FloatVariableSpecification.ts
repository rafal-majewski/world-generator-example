import type {Float} from "./Float.ts";
import {VariableSpecification} from "./VariableSpecification.ts";
export class FloatVariableSpecification<Datum> extends VariableSpecification<Datum> {
	private readonly valueComputer: (datum: Datum) => Float;
	public constructor(valueComputer: (datum: Datum) => Float) {
		super();
		this.valueComputer = valueComputer;
	}
	public override serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		return [value];
	}
	public override readonly size = 1;
	public override readonly type = "float";
	protected override setUniformWithRawSerializedValue(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		rawSerializedValue: Float32Array,
	): undefined {
		gl.uniform1fv(location, rawSerializedValue);
	}
}
