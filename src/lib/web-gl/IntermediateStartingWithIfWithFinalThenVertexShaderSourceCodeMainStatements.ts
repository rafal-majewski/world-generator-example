import type {BoolValue} from "./BoolValue.ts";
import type {FinalElseVertexShaderSourceCodeMainStatements} from "./FinalElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalThenVertexShaderSourceCodeMainStatements} from "./FinalThenVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements
	implements WithFinalThenVertexShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: FinalThenVertexShaderSourceCodeMainStatements;
	public constructor(
		condition: BoolValue,
		restStatements: FinalThenVertexShaderSourceCodeMainStatements,
	) {
		this.condition = condition;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: FinalElseVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements {
		const newStatementsRestStatements = this.restStatements.pushElse(else_);
		const newStatements =
			new IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements(
				this.condition,
				newStatementsRestStatements,
			);
		return newStatements;
	}
}
