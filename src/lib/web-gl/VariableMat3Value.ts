import type {Mat3Value} from "./Mat3Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableMat3Value implements Mat3Value {
	public readonly type = "mat3";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
