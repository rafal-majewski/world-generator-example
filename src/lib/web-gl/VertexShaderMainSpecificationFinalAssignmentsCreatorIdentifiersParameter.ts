import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions} from "./VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions.ts";
import type {VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables} from "./VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables.ts";
export type VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalsDeclarations extends VariablesDeclarations,
> = Readonly<{
	functions: VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions<CustomFunctions>;
	variables: VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables<
		UniformsDeclarations,
		AttributesDeclarations,
		LocalsDeclarations
	>;
}>;
