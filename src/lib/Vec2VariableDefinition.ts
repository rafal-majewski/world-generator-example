import type {VariableDefinition} from "./VariableDefinition.ts";
import type {Vector2} from "./Vector2.ts";
export class Vec2VariableDefinition<Datum> implements VariableDefinition<Datum> {
	public readonly type = "vec2";
	private readonly valueComputer: (datum: Datum) => Vector2;
	public constructor(valueComputer: (datum: Datum) => Vector2) {
		this.valueComputer = valueComputer;
	}
	public serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		return value;
	}
	public readonly size = 2;
	public setUniform(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		value: Float32Array,
	): void {
		gl.uniform2fv(location, value);
	}
}
