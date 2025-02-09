import type {BoolValue} from "./BoolValue.ts";
import type {FinalThenVertexShaderMainSpecificationStatements} from "./FinalThenVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithIfWithFinalThenVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithIfWithFinalThenVertexShaderMainSpecificationStatements.ts";
import type {WithFinalIfVertexShaderMainSpecificationStatements} from "./WithFinalIfVertexShaderMainSpecificationStatements.ts";
export class FinalIfVertexShaderMainSpecificationStatements
	implements WithFinalIfVertexShaderMainSpecificationStatements
{
	private readonly condition: BoolValue;
	public constructor(condition: BoolValue) {
		this.condition = condition;
	}
	public pushThen(
		then: FinalThenVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithIfWithFinalThenVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithIfWithFinalThenVertexShaderMainSpecificationStatements(
				this.condition,
				then,
			);
		return newStatements;
	}
}
