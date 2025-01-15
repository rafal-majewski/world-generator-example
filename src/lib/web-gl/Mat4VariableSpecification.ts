import type {Mat4} from "./Mat4.ts";
import {VariableSpecification} from "./VariableSpecification.ts";
export class Mat4VariableSpecification<Datum> extends VariableSpecification<Datum> {
	private readonly valueComputer: (datum: Datum) => Mat4;
	public constructor(valueComputer: (datum: Datum) => Mat4) {
		super();
		this.valueComputer = valueComputer;
	}
	public override serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		const serializedValue: readonly number[] = value.flat();
		return serializedValue;
	}
	public override readonly size = 16;
	public override readonly type = "mat4";
	protected override setUniformWithRawSerializedValue(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		rawSerializedValue: Float32Array,
	): undefined {
		gl.uniformMatrix4fv(location, false, rawSerializedValue);
	}
}
