import type {BoolValue} from "./BoolValue.ts";
import type {ThenFragmentShaderSourceCodeMainStatements} from "./ThenFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalIfFragmentShaderSourceCodeMainStatements} from "./WithFinalIfFragmentShaderSourceCodeMainStatements.ts";
export class IfFragmentShaderSourceCodeMainStatements
	implements WithFinalIfFragmentShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	public constructor(condition: BoolValue) {
		this.condition = condition;
	}
	public pushThen(
		then: ThenFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements(
				this.condition,
				then,
			);
		return newStatements;
	}
}
