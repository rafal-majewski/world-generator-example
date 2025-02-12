import type {BoolValue} from "./BoolValue.ts";
import type {ElseVertexShaderSourceCodeMainStatements} from "./ElseVertexShaderSourceCodeMainStatements.ts";
import type {ThenVertexShaderSourceCodeMainStatements} from "./ThenVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements
	implements WithFinalThenVertexShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: ThenVertexShaderSourceCodeMainStatements;
	public constructor(
		condition: BoolValue,
		restStatements: ThenVertexShaderSourceCodeMainStatements,
	) {
		this.condition = condition;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: ElseVertexShaderSourceCodeMainStatements,
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
