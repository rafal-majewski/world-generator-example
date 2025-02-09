import type {BoolValue} from "./BoolValue.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableBoolValue implements BoolValue {
	public readonly type = "bool";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
