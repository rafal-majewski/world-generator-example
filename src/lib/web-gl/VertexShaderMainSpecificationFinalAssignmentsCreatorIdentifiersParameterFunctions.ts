import type {builtInFunctions} from "./builtInFunctions.ts";
import type {Functions} from "./Functions.ts";
export type VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterFunctions<
	CustomFunctions extends Functions,
> = Readonly<{
	custom: CustomFunctions;
	builtIn: typeof builtInFunctions;
}>;
