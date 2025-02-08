import type {Mat3Value} from "./Mat3Value.ts";
import type {VariableIdentifier} from "./VariableIdentifier.ts";
import {VariableValue} from "./VariableValue.ts";
export class VariableMat3Value<IdentifierToUse extends VariableIdentifier>
	extends VariableValue<IdentifierToUse>
	implements Mat3Value
{
	public readonly type = "mat3";
}
