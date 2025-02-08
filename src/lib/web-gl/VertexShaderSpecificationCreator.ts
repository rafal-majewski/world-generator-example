import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSpecification} from "./VertexShaderSpecification.ts";
import type {VertexShaderSpecificationBuilder} from "./VertexShaderSpecificationBuilder.ts";
export type VertexShaderSpecificationCreator<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
> = (
	builder: VertexShaderSpecificationBuilder<
		UniformsDeclarations,
		AttributesDeclarations,
		VaryingsDeclarations
	>,
) => VertexShaderSpecification;
