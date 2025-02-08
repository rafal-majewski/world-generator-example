import type {FloatValue} from "./FloatValue.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import {VariableValue} from "./VariableValue.ts";
export class VariableFloatValue<IdentifierToUse extends VariableIdentifier>
	extends VariableValue<IdentifierToUse>
	implements FloatValue
{
	public readonly type = "float";
}
