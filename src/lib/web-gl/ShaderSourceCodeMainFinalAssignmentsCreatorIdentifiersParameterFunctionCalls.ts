import type {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import type {Functions} from "./Functions.ts";
export type ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls<
	CustomFunctions extends Functions,
> = Readonly<{
	custom: CustomFunctions;
	builtIn: typeof builtInFunctionCalls;
}>;
