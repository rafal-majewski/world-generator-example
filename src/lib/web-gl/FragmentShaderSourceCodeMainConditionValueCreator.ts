import type {BoolValue} from "./BoolValue.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter.ts";
export type FragmentShaderSourceCodeMainConditionValueCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	identifiers: FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>,
) => BoolValue;
