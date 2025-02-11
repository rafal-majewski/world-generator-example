import type {FragmentShaderSourceCodeBuilder} from "./FragmentShaderSourceCodeBuilder.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {WithSetMainFragmentShaderSourceCodeBuilder} from "./WithSetMainFragmentShaderSourceCodeBuilder.ts";
export type WithSetMainFragmentShaderSourceCodeBuilderCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	builder: FragmentShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse
	>,
) => WithSetMainFragmentShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse,
	VaryingVariablesDeclarationsToUse,
	OutputVariablesDeclarationsToUse
>;
