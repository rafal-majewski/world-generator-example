import type {ThenFragmentShaderSourceCodeMainStatements} from "./ThenFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export interface WithFinalIfFragmentShaderSourceCodeMainStatements {
	pushThen(
		then: ThenFragmentShaderSourceCodeMainStatements,
	): WithFinalThenFragmentShaderSourceCodeMainStatements;
}
