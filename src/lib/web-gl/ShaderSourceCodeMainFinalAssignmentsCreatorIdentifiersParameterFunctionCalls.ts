import type {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
// export type ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls<
// 	CustomFunctions extends Functions,
// > = Readonly<{
// 	custom: CustomFunctions;
// 	builtIn: typeof builtInFunctionCalls;
// }>;
export type ShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameterFunctionCalls =
	Readonly<{
		builtIn: typeof builtInFunctionCalls;
	}>;
