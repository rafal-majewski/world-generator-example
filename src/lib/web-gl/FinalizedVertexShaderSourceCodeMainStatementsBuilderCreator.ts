import type {FinalizedVertexShaderSourceCodeMainStatementsBuilder} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilder.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainStatementsBuilder} from "./VertexShaderSourceCodeMainStatementsBuilder.ts";
export type FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	builder: VertexShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>,
) => FinalizedVertexShaderSourceCodeMainStatementsBuilder;
