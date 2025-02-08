import type {Vec3Value} from "./Vec3Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import {VariableValue} from "./VariableValue.ts";
export class VariableVec3Value<IdentifierToUse extends VariableIdentifier>
	extends VariableValue<IdentifierToUse>
	implements Vec3Value
{
	public readonly type = "vec3";
}
