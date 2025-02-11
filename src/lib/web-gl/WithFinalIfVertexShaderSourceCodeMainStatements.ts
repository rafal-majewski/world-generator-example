import type {FinalThenVertexShaderSourceCodeMainStatements} from "./FinalThenVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export interface WithFinalIfVertexShaderSourceCodeMainStatements {
	pushThen(
		then: FinalThenVertexShaderSourceCodeMainStatements,
	): WithFinalThenVertexShaderSourceCodeMainStatements;
}
