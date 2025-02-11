import type {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export interface WithFinalThenFragmentShaderSourceCodeMainStatements {
	pushElse(
		else_: FinalElseFragmentShaderSourceCodeMainStatements,
	): WithFinalElseFragmentShaderSourceCodeMainStatements;
}
