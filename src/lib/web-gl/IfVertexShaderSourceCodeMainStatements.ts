import type {BoolValue} from "./BoolValue.ts";
import type {ThenVertexShaderSourceCodeMainStatements} from "./ThenVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
export class IfVertexShaderSourceCodeMainStatements
	implements WithFinalIfVertexShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	public constructor(condition: BoolValue) {
		this.condition = condition;
	}
	public pushThen(
		then: ThenVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithIfWithFinalThenVertexShaderSourceCodeMainStatements(
				this.condition,
				then,
			);
		return newStatements;
	}
}
