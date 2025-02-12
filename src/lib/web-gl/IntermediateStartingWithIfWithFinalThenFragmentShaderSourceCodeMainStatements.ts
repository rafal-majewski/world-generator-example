import type {BoolValue} from "./BoolValue.ts";
import type {ElseFragmentShaderSourceCodeMainStatements} from "./ElseFragmentShaderSourceCodeMainStatements.ts";
import type {ThenFragmentShaderSourceCodeMainStatements} from "./ThenFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements
	implements WithFinalThenFragmentShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: ThenFragmentShaderSourceCodeMainStatements;
	public constructor(
		condition: BoolValue,
		restStatements: ThenFragmentShaderSourceCodeMainStatements,
	) {
		this.condition = condition;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: ElseFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements {
		const newStatementsRestStatements = this.restStatements.pushElse(else_);
		const newStatements =
			new IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements(
				this.condition,
				newStatementsRestStatements,
			);
		return newStatements;
	}
}
