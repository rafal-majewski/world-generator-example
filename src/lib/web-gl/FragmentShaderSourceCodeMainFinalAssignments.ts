import type {ComputeVariablesValuesFromVariablesDeclarations} from "./ComputeVariablesValuesFromVariablesDeclarations.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
export type FragmentShaderSourceCodeMainFinalAssignments<
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> = Readonly<{
	outs: ComputeVariablesValuesFromVariablesDeclarations<OutputVariablesDeclarationsToUse>;
}>;
