import type {VariableDefinition} from "./VariableDefinition.ts";
export class FloatVariableDefinition<Datum> implements VariableDefinition<Datum> {
	public readonly type = "float";
	private readonly valueComputer: (datum: Datum) => number;
	public constructor(valueComputer: (datum: Datum) => number) {
		this.valueComputer = valueComputer;
	}
	public serialize(datum: Datum): readonly number[] {
		const value = this.valueComputer(datum);
		return [value];
	}
	public readonly size = 1;
}
