import type {FinalElseVertexShaderSourceCodeMainStatements} from "./FinalElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class FinalThenVertexShaderSourceCodeMainStatements
	implements WithFinalThenVertexShaderSourceCodeMainStatements
{
	private readonly body: FinalizedCustomFunctionStatements;
	public constructor(body: FinalizedCustomFunctionStatements) {
		this.body = body;
	}
	public pushElse(
		else_: FinalElseVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements(
				this.body,
				else_,
			);
		return newStatements;
	}
}
