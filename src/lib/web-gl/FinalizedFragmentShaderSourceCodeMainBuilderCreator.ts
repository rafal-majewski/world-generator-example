import type {FinalizedFragmentShaderSourceCodeMainBuilder} from "./FinalizedFragmentShaderSourceCodeMainBuilder.ts";
import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainBuilder} from "./FragmentShaderSourceCodeMainBuilder.ts";
export type FinalizedFragmentShaderSourceCodeMainBuilderCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	builder: FragmentShaderSourceCodeMainBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
		CustomFunctions,
		LocalVariablesDeclarationsToUse
	>,
) => FinalizedFragmentShaderSourceCodeMainBuilder;
