import {Mat3Value} from "./Mat3Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableMat3Value extends Mat3Value {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
