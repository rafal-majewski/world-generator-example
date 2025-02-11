import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariableTypeToValue} from "./VariableTypeToValue.ts";
export type ComputeVariablesValuesFromVariablesDeclarations<
	VariablesDeclarationsToUse extends VariablesDeclarations,
> = Readonly<{
	[VariableNameToUse in keyof VariablesDeclarationsToUse]: VariableTypeToValue[VariablesDeclarationsToUse[VariableNameToUse]];
}>;
