import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables.ts";
import type {literals} from "./literals.ts";

import type {ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls} from "./ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls.ts";

export type FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = Readonly<{
	functionCalls: ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls;
	variables: FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>;
	literals: typeof literals;
}>;
