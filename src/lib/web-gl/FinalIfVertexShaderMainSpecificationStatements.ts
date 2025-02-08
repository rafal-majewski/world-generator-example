import type {BoolValue} from "./BoolValue.ts";
import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements.ts";
import type {WithFinalIfVertexShaderMainSpecificationStatements} from "./WithFinalIfVertexShaderMainSpecificationStatements.ts";
export class FinalIfVertexShaderMainSpecificationStatements
	implements WithFinalIfVertexShaderMainSpecificationStatements
{
	private readonly condition: BoolValue;
	private readonly body: FinalizedVertexShaderMainSpecificationStatements;
	public constructor(condition: BoolValue, body: FinalizedVertexShaderMainSpecificationStatements) {
		this.condition = condition;
		this.body = body;
	}
	public pushElse(
		else_: FinalElseVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements(
				this.condition,
				this.body,
				else_,
			);
		return newStatements;
	}
}
