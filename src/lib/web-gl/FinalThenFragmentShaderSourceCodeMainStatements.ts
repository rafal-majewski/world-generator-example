import type {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class FinalThenFragmentShaderSourceCodeMainStatements
	implements WithFinalThenFragmentShaderSourceCodeMainStatements
{
	private readonly body: FinalizedCustomFunctionStatements;
	public constructor(body: FinalizedCustomFunctionStatements) {
		this.body = body;
	}
	public pushElse(
		else_: FinalElseFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements(
				this.body,
				else_,
			);
		return newStatements;
	}
}
