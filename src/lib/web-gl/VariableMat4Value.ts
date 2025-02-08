import type {Mat4Value} from "./Mat4Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import {VariableValue} from "./VariableValue.ts";
export class VariableMat4Value<IdentifierToUse extends VariableIdentifier>
	extends VariableValue<IdentifierToUse>
	implements Mat4Value
{
	public readonly type = "mat4";
}
