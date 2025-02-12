import type {ThenVertexShaderSourceCodeMainStatements} from "./ThenVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export interface WithFinalIfVertexShaderSourceCodeMainStatements {
	pushThen(
		then: ThenVertexShaderSourceCodeMainStatements,
	): WithFinalThenVertexShaderSourceCodeMainStatements;
}
