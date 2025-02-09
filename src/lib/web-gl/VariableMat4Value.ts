import type {Mat4Value} from "./Mat4Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableMat4Value implements Mat4Value {
	public readonly type = "mat4";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
