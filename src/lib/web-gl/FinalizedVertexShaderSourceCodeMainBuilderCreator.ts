import type {FinalizedVertexShaderSourceCodeMainBuilder} from "./FinalizedVertexShaderSourceCodeMainBuilder.ts";
import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainBuilder} from "./VertexShaderSourceCodeMainBuilder.ts";
export type FinalizedVertexShaderSourceCodeMainBuilderCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	builder: VertexShaderSourceCodeMainBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		CustomFunctions,
		LocalVariablesDeclarationsToUse
	>,
) => FinalizedVertexShaderSourceCodeMainBuilder;
