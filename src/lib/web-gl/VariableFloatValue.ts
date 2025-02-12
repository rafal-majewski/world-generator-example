import {FloatValue} from "./FloatValue.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableFloatValue extends FloatValue {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
