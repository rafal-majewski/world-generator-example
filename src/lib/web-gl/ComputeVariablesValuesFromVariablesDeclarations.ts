import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariableTypeToVariableValue} from "./VariableTypeToVariableValue.ts";
export type ComputeVariablesValuesFromVariablesDeclarations<
	VariablesDeclarationsToUse extends VariablesDeclarations,
> = Readonly<{
	[VariableNameToUse in keyof VariablesDeclarationsToUse]: VariableTypeToVariableValue[VariablesDeclarationsToUse[VariableNameToUse]];
}>;
