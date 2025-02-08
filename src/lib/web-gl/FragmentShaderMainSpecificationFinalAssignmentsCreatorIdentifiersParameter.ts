import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions} from "./FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions.ts";
import type {FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables} from "./FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables.ts";
import type {Functions} from "./Functions.ts";
export type FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
> = Readonly<{
	functions: FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions<CustomFunctions>;
	variables: FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables<
		UniformsDeclarations,
		VaryingsDeclarations
	>;
}>;
