import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderMainSpecificationFinalAssignments} from "./VertexShaderMainSpecificationFinalAssignments.ts";
import type {VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter} from "./VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter.ts";
export type VertexShaderMainSpecificationFinalAssignmentsCreator<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalsDeclarations extends VariablesDeclarations,
> = (
	identifiers: VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameter<
		UniformsDeclarations,
		AttributesDeclarations,
		CustomFunctions,
		LocalsDeclarations
	>,
) => VertexShaderMainSpecificationFinalAssignments<VaryingsDeclarations>;
