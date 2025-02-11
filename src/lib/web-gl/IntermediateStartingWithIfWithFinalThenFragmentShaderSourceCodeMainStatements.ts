import type {BoolValue} from "./BoolValue.ts";
import type {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalThenFragmentShaderSourceCodeMainStatements} from "./FinalThenFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements
	implements WithFinalThenFragmentShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: FinalThenFragmentShaderSourceCodeMainStatements;
	public constructor(
		condition: BoolValue,
		restStatements: FinalThenFragmentShaderSourceCodeMainStatements,
	) {
		this.condition = condition;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: FinalElseFragmentShaderSourceCodeMainStatements,
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
