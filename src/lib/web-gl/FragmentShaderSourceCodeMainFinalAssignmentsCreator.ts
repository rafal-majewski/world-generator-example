import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignments} from "./FragmentShaderSourceCodeMainFinalAssignments.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter.ts";
export type FragmentShaderSourceCodeMainFinalAssignmentsCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	identifiers: FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>,
) => FragmentShaderSourceCodeMainFinalAssignments<OutputVariablesDeclarationsToUse>;
