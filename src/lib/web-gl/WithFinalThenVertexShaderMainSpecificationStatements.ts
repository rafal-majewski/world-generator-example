import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export interface WithFinalThenVertexShaderMainSpecificationStatements {
	pushElse(
		else_: FinalElseVertexShaderMainSpecificationStatements,
	): WithFinalElseVertexShaderMainSpecificationStatements;
}
