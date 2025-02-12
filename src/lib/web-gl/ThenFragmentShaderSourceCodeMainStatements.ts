import type {ElseFragmentShaderSourceCodeMainStatements} from "./ElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatements} from "./FinalizedFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class ThenFragmentShaderSourceCodeMainStatements
	implements WithFinalThenFragmentShaderSourceCodeMainStatements
{
	private readonly body: FinalizedFragmentShaderSourceCodeMainStatements;
	public constructor(body: FinalizedFragmentShaderSourceCodeMainStatements) {
		this.body = body;
	}
	public pushElse(
		else_: ElseFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements(
				this.body,
				else_,
			);
		return newStatements;
	}
}
