import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables.ts";
import type {literals} from "./literals.ts";
import type {operators} from "./operators.ts";
import type {ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls} from "./ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls.ts";
export type FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = Readonly<{
	functionCalls: ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls<CustomFunctions>;
	variables: FragmentShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>;
	literals: typeof literals;
	operators: typeof operators;
}>;
