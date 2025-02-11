import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter} from "./VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter.ts";
export type VertexShaderSourceCodeMainVariableValueCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
	ValueToUse extends Value,
> = (
	identifiers: VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		CustomFunctions,
		LocalVariablesDeclarationsToUse
	>,
) => ValueToUse;
