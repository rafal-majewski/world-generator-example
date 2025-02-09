import type {Vec4Value} from "./Vec4Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableVec4Value implements Vec4Value {
	public readonly type = "vec4";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
