import type {Serializer} from "./Serializer.ts";
export class FloatSerializer<Datum> implements Serializer<Datum> {
	private readonly valueComputer: VariableValueComputer<Datum, "float">;
	public constructor(valueComputer: VariableValueComputer<Datum, "float">) {
		this.valueComputer = valueComputer;
	}
	public serialize(datum: Datum): readonly number[] {
		const variableValue = this.valueComputer(datum);
		return [variableValue];
	}
}
