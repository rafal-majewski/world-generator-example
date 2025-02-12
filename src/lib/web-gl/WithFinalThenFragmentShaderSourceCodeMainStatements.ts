import type {ElseFragmentShaderSourceCodeMainStatements} from "./ElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export interface WithFinalThenFragmentShaderSourceCodeMainStatements {
	pushElse(
		else_: ElseFragmentShaderSourceCodeMainStatements,
	): WithFinalElseFragmentShaderSourceCodeMainStatements;
}
