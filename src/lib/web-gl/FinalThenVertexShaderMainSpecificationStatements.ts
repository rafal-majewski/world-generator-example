import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithThenWithFinalElseVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithThenWithFinalElseVertexShaderMainSpecificationStatements.ts";
import type {WithFinalThenVertexShaderMainSpecificationStatements} from "./WithFinalThenVertexShaderMainSpecificationStatements.ts";
export class FinalThenVertexShaderMainSpecificationStatements
	implements WithFinalThenVertexShaderMainSpecificationStatements
{
	private readonly body: FinalizedVertexShaderMainSpecificationStatements;
	public constructor(body: FinalizedVertexShaderMainSpecificationStatements) {
		this.body = body;
	}
	public pushElse(
		else_: FinalElseVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithThenWithFinalElseVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithThenWithFinalElseVertexShaderMainSpecificationStatements(
				this.body,
				else_,
			);
		return newStatements;
	}
}
