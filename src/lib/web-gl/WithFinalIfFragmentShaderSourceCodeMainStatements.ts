import type {FinalThenFragmentShaderSourceCodeMainStatements} from "./FinalThenFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export interface WithFinalIfFragmentShaderSourceCodeMainStatements {
	pushThen(
		then: FinalThenFragmentShaderSourceCodeMainStatements,
	): WithFinalThenFragmentShaderSourceCodeMainStatements;
}
