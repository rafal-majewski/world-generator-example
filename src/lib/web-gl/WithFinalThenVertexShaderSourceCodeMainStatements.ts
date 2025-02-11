import type {FinalElseVertexShaderSourceCodeMainStatements} from "./FinalElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export interface WithFinalThenVertexShaderSourceCodeMainStatements {
	pushElse(
		else_: FinalElseVertexShaderSourceCodeMainStatements,
	): WithFinalElseVertexShaderSourceCodeMainStatements;
}
