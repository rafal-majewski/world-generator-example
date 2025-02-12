import {Vec3Value} from "./Vec3Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableVec3Value extends Vec3Value {
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		super();
		this.identifier = identifier;
	}
	public override stringify(): VariableIdentifier {
		return this.identifier;
	}
}
