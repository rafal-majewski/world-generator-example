import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export interface WithFinalIfVertexShaderMainSpecificationStatements {
	pushElse(
		else_: FinalElseVertexShaderMainSpecificationStatements,
	): WithFinalElseVertexShaderMainSpecificationStatements;
}
