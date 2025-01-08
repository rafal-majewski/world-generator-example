import type {Serializer} from "./Serializer.ts";
import type {VariableSize} from "./VariableSize.ts";
import type {VariableType} from "./VariableType.ts";
export abstract class VariableSpecification<Datum> implements Serializer<Datum> {
	public abstract readonly size: VariableSize;
	public abstract readonly type: VariableType;
	public abstract serialize(datum: Datum): readonly number[];
	protected abstract setUniformWithRawSerializedValue(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		serializedValue: Float32Array,
	): void;
	public setUniform(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		datum: Datum,
	): void {
		const serializedValue = this.serialize(datum);
		const rawSerializedValue = new Float32Array(serializedValue);
		this.setUniformWithRawSerializedValue(gl, location, rawSerializedValue);
	}
}
