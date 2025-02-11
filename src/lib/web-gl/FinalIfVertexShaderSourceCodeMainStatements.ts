import type {BoolValue} from "./BoolValue.ts";
import type {FinalThenVertexShaderSourceCodeMainStatements} from "./FinalThenVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
export class FinalIfVertexShaderSourceCodeMainStatements
	implements WithFinalIfVertexShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	public constructor(condition: BoolValue) {
		this.condition = condition;
	}
	public pushThen(
		then: FinalThenVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements(
				this.condition,
				then,
			);
		return newStatements;
	}
}
