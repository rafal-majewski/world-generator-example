import type {Mat2Value} from "./Mat2Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableMat2Value implements Mat2Value {
	public readonly type = "mat2";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
