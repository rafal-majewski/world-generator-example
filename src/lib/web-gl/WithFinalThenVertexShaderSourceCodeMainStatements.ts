import type {ElseVertexShaderSourceCodeMainStatements} from "./ElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export interface WithFinalThenVertexShaderSourceCodeMainStatements {
	pushElse(
		else_: ElseVertexShaderSourceCodeMainStatements,
	): WithFinalElseVertexShaderSourceCodeMainStatements;
}
