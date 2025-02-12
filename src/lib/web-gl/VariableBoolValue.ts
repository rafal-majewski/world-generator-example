import {BoolValue} from "./BoolValue.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableBoolValue extends BoolValue {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
