import type {ComputeVariablesValuesFromVariablesDeclarations} from "./ComputeVariablesValuesFromVariablesDeclarations.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {Vec4Value} from "./Vec4Value.ts";
export type VertexShaderMainSpecificationFinalAssignments<
	VaryingsDeclarations extends VariablesDeclarations,
> = Readonly<{
	gl_Position: Vec4Value;
	outs: ComputeVariablesValuesFromVariablesDeclarations<VaryingsDeclarations>;
}>;
