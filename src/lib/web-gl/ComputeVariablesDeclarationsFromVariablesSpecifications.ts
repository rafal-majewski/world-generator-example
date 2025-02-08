import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
export type ComputeVariablesDeclarationsFromVariablesSpecifications<
	VariablesSpecificationsToUse extends VariablesSpecifications<unknown>,
> = Readonly<{
	[VariableNameToUse in keyof VariablesSpecificationsToUse]: VariablesSpecificationsToUse[VariableNameToUse]["type"];
}>;
