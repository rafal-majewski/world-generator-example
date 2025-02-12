import {Mat4Value} from "./Mat4Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableMat4Value extends Mat4Value {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
