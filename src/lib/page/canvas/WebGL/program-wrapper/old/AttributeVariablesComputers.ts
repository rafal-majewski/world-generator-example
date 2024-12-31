import type {AttributeVariableComputer} from "./AttributeVariableComputer.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";
export type AttributeVariablesComputers<
	VariableNameToVariableTypeToUse extends VariableNameToVariableType,
	Triangle,
> = Readonly<{
	[CurrentVariableName in keyof VariableNameToVariableTypeToUse]: AttributeVariableComputer<Triangle
}>;
