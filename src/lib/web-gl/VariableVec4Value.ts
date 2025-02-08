import type {Vec4Value} from "./Vec4Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import {VariableValue} from "./VariableValue.ts";
export class VariableVec4Value<IdentifierToUse extends VariableIdentifier>
	extends VariableValue<IdentifierToUse>
	implements Vec4Value
{
	public readonly type = "vec4";
}
