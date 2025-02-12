import type {ThenVertexShaderSourceCodeMainStatements} from "./ThenVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalThenVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalThenVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements
	implements WithFinalIfVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalIfVertexShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalIfVertexShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushThen(
		then: ThenVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalThenVertexShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushThen(then);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalThenVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
