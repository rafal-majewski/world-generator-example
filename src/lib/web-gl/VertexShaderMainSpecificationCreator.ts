import type {FinalizedVertexShaderMainSpecificationBuilder} from "./FinalizedVertexShaderMainSpecificationBuilder.ts";
import type {Functions} from "./Functions.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderMainSpecificationBuilder} from "./VertexShaderMainSpecificationBuilder.ts";
export type VertexShaderMainSpecificationCreator<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalsDeclarations extends VariablesDeclarations,
> = (
	builder: VertexShaderMainSpecificationBuilder<
		UniformsDeclarations,
		AttributesDeclarations,
		VaryingsDeclarations,
		CustomFunctions,
		LocalsDeclarations
	>,
) => FinalizedVertexShaderMainSpecificationBuilder;
