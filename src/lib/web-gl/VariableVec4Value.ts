import {Vec4Value} from "./Vec4Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableVec4Value extends Vec4Value {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
