import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderMainSpecificationFinalAssignments} from "./FragmentShaderMainSpecificationFinalAssignments.ts";
import type {FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter} from "./FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter.ts";
import type {Functions} from "./Functions.ts";
export type FragmentShaderMainSpecificationFinalAssignmentsCreator<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
> = (
	identifiers: FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter<
		UniformsDeclarations,
		VaryingsDeclarations,
		CustomFunctions
	>,
) => FragmentShaderMainSpecificationFinalAssignments<OutputsDeclarations>;
