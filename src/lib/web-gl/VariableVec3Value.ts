import type {Vec3Value} from "./Vec3Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
export class VariableVec3Value implements Vec3Value {
	public readonly type = "vec3";
	private readonly identifier: VariableIdentifier;
	public constructor(identifier: VariableIdentifier) {
		this.identifier = identifier;
	}
	public stringify(): VariableIdentifier {
		return this.identifier;
	}
}
