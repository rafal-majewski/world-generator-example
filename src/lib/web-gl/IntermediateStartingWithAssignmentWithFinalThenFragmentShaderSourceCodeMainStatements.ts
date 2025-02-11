import type {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalElseFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalThenFragmentShaderSourceCodeMainStatements
	implements WithFinalThenFragmentShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalThenFragmentShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalThenFragmentShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: FinalElseFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalElseFragmentShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushElse(else_);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalElseFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
