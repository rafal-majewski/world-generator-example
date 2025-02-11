import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter.ts";
export type FragmentShaderSourceCodeMainVariableValueCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
	ValueToUse extends Value,
> = (
	identifiers: FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		CustomFunctions,
		LocalVariablesDeclarationsToUse
	>,
) => ValueToUse;
