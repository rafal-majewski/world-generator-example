import type {FinalThenVertexShaderMainSpecificationStatements} from "./FinalThenVertexShaderMainSpecificationStatements.ts";
import type {WithFinalThenVertexShaderMainSpecificationStatements} from "./WithFinalThenVertexShaderMainSpecificationStatements.ts";
export interface WithFinalIfVertexShaderMainSpecificationStatements {
	pushThen(
		then: FinalThenVertexShaderMainSpecificationStatements,
	): WithFinalThenVertexShaderMainSpecificationStatements;
}
