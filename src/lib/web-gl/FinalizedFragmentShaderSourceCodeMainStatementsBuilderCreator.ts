import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilder} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainStatementsBuilder} from "./FragmentShaderSourceCodeMainStatementsBuilder.ts";
export type FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	builder: FragmentShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>,
) => FinalizedFragmentShaderSourceCodeMainStatementsBuilder;
