import type {Mat2Value} from "./Mat2Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import {VariableValue} from "./VariableValue.ts";
export class VariableMat2Value<IdentifierToUse extends VariableIdentifier>
	extends VariableValue<IdentifierToUse>
	implements Mat2Value
{
	public readonly type = "mat2";
}
