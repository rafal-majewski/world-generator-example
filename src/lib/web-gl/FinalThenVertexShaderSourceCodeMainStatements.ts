import type {FinalElseVertexShaderSourceCodeMainStatements} from "./FinalElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedVertexShaderSourceCodeMainStatements} from "./FinalizedVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class FinalThenVertexShaderSourceCodeMainStatements
	implements WithFinalThenVertexShaderSourceCodeMainStatements
{
	private readonly body: FinalizedVertexShaderSourceCodeMainStatements;
	public constructor(body: FinalizedVertexShaderSourceCodeMainStatements) {
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
