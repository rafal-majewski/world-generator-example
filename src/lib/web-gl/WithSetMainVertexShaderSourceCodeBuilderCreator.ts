import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeBuilder} from "./VertexShaderSourceCodeBuilder.ts";
import type {WithSetMainVertexShaderSourceCodeBuilder} from "./WithSetMainVertexShaderSourceCodeBuilder.ts";
export type WithSetMainVertexShaderSourceCodeBuilderCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	builder: VertexShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse
	>,
) => WithSetMainVertexShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse,
	AttributeVariablesDeclarationsToUse,
	VaryingVariablesDeclarationsToUse
>;
