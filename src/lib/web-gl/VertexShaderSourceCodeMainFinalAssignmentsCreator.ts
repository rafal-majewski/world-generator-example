import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignments} from "./VertexShaderSourceCodeMainFinalAssignments.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter} from "./VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter.ts";
export type VertexShaderSourceCodeMainFinalAssignmentsCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	identifiers: VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		CustomFunctions,
		LocalVariablesDeclarationsToUse
	>,
) => VertexShaderSourceCodeMainFinalAssignments<VaryingVariablesDeclarationsToUse>;
