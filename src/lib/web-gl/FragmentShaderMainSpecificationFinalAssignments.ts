import type {ComputeVariablesValuesFromVariablesDeclarations} from "./ComputeVariablesValuesFromVariablesDeclarations.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
export type FragmentShaderMainSpecificationFinalAssignments<
	OutputsDeclarations extends VariablesDeclarations,
> = Readonly<{
	outs: ComputeVariablesValuesFromVariablesDeclarations<OutputsDeclarations>;
}>;
