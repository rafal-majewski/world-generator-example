import type {BoolValue} from "./BoolValue.ts";
import type {FinalThenFragmentShaderSourceCodeMainStatements} from "./FinalThenFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalIfFragmentShaderSourceCodeMainStatements} from "./WithFinalIfFragmentShaderSourceCodeMainStatements.ts";
export class FinalIfFragmentShaderSourceCodeMainStatements
	implements WithFinalIfFragmentShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	public constructor(condition: BoolValue) {
		this.condition = condition;
	}
	public pushThen(
		then: FinalThenFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithIfWithFinalThenFragmentShaderSourceCodeMainStatements(
				this.condition,
				then,
			);
		return newStatements;
	}
}
