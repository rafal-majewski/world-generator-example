import type {Vector3} from "../../Vector3.ts";
import type {VariableDefinition} from "./VariableDefinition.ts";
export class Vec3VariableDefinition<Datum> implements VariableDefinition<Datum> {
	public readonly type = "vec3";
	private readonly valueComputer: (datum: Datum) => Vector3;
	public constructor(valueComputer: (datum: Datum) => Vector3) {
		this.valueComputer = valueComputer;
	}
	public serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		return value;
	}
	public readonly size = 3;
}
