import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {ComputeVariablesValuesFromVariablesDeclarations} from "./ComputeVariablesValuesFromVariablesDeclarations.ts";
export type VertexShaderMainSpecificationFinalAssignmentsCreatorIdentifiersParameterVariables<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	LocalsDeclarations extends VariablesDeclarations,
> = Readonly<{
	uniforms: ComputeVariablesValuesFromVariablesDeclarations<UniformsDeclarations>;
	ins: ComputeVariablesValuesFromVariablesDeclarations<AttributesDeclarations>;
	locals: ComputeVariablesValuesFromVariablesDeclarations<LocalsDeclarations>;
}>;
