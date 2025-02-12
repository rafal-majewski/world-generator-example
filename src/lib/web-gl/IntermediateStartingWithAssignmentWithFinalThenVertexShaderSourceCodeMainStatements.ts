import type {ElseVertexShaderSourceCodeMainStatements} from "./ElseVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalElseVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalElseVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalThenVertexShaderSourceCodeMainStatements
	implements WithFinalThenVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalThenVertexShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalThenVertexShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: ElseVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalElseVertexShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushElse(else_);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalElseVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
