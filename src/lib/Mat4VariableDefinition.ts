import type {Matrix4} from "./Matrix4.ts";
import type {VariableDefinition} from "./VariableDefinition.ts";
export class Mat4VariableDefinition<Datum> implements VariableDefinition<Datum> {
	public readonly type = "mat4";
	private readonly valueComputer: (datum: Datum) => Matrix4;
	public constructor(valueComputer: (datum: Datum) => Matrix4) {
		this.valueComputer = valueComputer;
	}
	public serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		const serializedValue: readonly number[] = value.flat();
		return serializedValue;
	}
	public readonly size = 16;
	public setUniform(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		value: Float32Array,
	): void {
		gl.uniformMatrix4fv(location, false, value);
	}
}
