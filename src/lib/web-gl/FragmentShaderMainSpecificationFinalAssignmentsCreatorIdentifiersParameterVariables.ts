import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {ComputeVariablesValuesFromVariablesDeclarations} from "./ComputeVariablesValuesFromVariablesDeclarations.ts";
export type FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
> = Readonly<{
	uniforms: ComputeVariablesValuesFromVariablesDeclarations<UniformsDeclarations>;
	ins: ComputeVariablesValuesFromVariablesDeclarations<VaryingsDeclarations>;
}>;
