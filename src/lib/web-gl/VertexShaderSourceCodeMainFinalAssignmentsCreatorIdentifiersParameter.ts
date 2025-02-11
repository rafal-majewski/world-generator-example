import type {ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls} from "./ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables} from "./VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables.ts";
import type {literals} from "./literals.ts";
import type {operators} from "./operators.ts";
export type VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = Readonly<{
	functionCalls: ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls;
	variables: VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterVariables<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>;
	literals: typeof literals;
	operators: typeof operators;
}>;
