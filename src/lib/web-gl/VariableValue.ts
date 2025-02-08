import type {Value} from "./Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import type {VariableType} from "./VariableType.ts";
export abstract class VariableValue<IdentifierToUse extends VariableIdentifier> implements Value {
	private readonly identifier: IdentifierToUse;
	public constructor(identifier: IdentifierToUse) {
		this.identifier = identifier;
	}
	public stringify(): IdentifierToUse {
		return this.identifier;
	}
	public abstract readonly type: VariableType;
}
