import type {FloatValue} from "./FloatValue.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableFloatValue implements FloatValue {
	public readonly type = "float";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
