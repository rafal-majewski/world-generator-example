import {Vec2Value} from "./Vec2Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableVec2Value extends Vec2Value {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
