import {Mat2Value} from "./Mat2Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableMat2Value extends Mat2Value {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
