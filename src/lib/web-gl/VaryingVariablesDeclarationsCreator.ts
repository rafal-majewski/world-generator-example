import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {variableTypes} from "./variableTypes.ts";
export type VaryingVariablesDeclarationsCreator<
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
> = (types: typeof variableTypes) => VaryingVariablesDeclarationsToUse;
