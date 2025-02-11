import type {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatements} from "./FinalizedFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class FinalThenFragmentShaderSourceCodeMainStatements
	implements WithFinalThenFragmentShaderSourceCodeMainStatements
{
	private readonly body: FinalizedFragmentShaderSourceCodeMainStatements;
	public constructor(body: FinalizedFragmentShaderSourceCodeMainStatements) {
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
