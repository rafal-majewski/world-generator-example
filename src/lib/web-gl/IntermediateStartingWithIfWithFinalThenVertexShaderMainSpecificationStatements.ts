import type {BoolValue} from "./BoolValue.ts";
import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {FinalThenVertexShaderMainSpecificationStatements} from "./FinalThenVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements.ts";
import type {WithFinalThenVertexShaderMainSpecificationStatements} from "./WithFinalThenVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithIfWithFinalThenVertexShaderMainSpecificationStatements
	implements WithFinalThenVertexShaderMainSpecificationStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: FinalThenVertexShaderMainSpecificationStatements;
	public constructor(
		condition: BoolValue,
		restStatements: FinalThenVertexShaderMainSpecificationStatements,
	) {
		this.condition = condition;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: FinalElseVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements {
		const newStatementsRestStatements = this.restStatements.pushElse(else_);
		const newStatements =
			new IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements(
				this.condition,
				newStatementsRestStatements,
			);
		return newStatements;
	}
}
