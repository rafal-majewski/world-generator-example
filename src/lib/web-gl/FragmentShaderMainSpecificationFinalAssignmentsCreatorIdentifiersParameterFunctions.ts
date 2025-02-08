import type {builtInFunctions} from "./builtInFunctions.ts";
import type {Functions} from "./Functions.ts";
export type FragmentShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions<
	CustomFunctions extends Functions,
> = Readonly<{
	custom: CustomFunctions;
	builtIn: typeof builtInFunctions;
}>;
