import type {FragmentShaderSpecification} from "./FragmentShaderSpecification.ts";
import type {FragmentShaderSpecificationBuilder} from "./FragmentShaderSpecificationBuilder.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
export type FragmentShaderSpecificationCreator<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
> = (
	builder: FragmentShaderSpecificationBuilder<
		UniformsDeclarations,
		VaryingsDeclarations,
		OutputsDeclarations
	>,
) => FragmentShaderSpecification;
