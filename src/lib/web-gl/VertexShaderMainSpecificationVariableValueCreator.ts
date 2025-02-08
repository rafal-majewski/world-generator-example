import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter} from "./VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter.ts";
export type VertexShaderMainSpecificationVariableValueCreator<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalsDeclarations extends VariablesDeclarations,
> = (
	identifiers: VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter<
		UniformsDeclarations,
		AttributesDeclarations,
		CustomFunctions,
		LocalsDeclarations
	>,
) => Value;
