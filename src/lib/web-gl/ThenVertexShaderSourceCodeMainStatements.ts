import type {ElseVertexShaderSourceCodeMainStatements} from "./ElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedVertexShaderSourceCodeMainStatements} from "./FinalizedVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class ThenVertexShaderSourceCodeMainStatements
	implements WithFinalThenVertexShaderSourceCodeMainStatements
{
	private readonly body: FinalizedVertexShaderSourceCodeMainStatements;
	public constructor(body: FinalizedVertexShaderSourceCodeMainStatements) {
		this.body = body;
	}
	public pushElse(
		else_: ElseVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements(
				this.body,
				else_,
			);
		return newStatements;
	}
}
