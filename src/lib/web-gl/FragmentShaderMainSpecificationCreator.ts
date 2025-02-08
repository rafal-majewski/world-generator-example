import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderMainSpecification} from "./FragmentShaderMainSpecification.ts";
import type {FragmentShaderMainSpecificationBuilder} from "./FragmentShaderMainSpecificationBuilder.ts";
import type {Functions} from "./Functions.ts";
export type FragmentShaderMainSpecificationCreator<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
> = (
	builder: FragmentShaderMainSpecificationBuilder<
		UniformsDeclarations,
		VaryingsDeclarations,
		OutputsDeclarations,
		CustomFunctions
	>,
) => FragmentShaderMainSpecification;
