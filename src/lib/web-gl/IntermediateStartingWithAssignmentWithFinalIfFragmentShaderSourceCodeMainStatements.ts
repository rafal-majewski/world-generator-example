import type {ThenFragmentShaderSourceCodeMainStatements} from "./ThenFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalThenFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalThenFragmentShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalIfFragmentShaderSourceCodeMainStatements} from "./WithFinalIfFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements
	implements WithFinalIfFragmentShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalIfFragmentShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalIfFragmentShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushThen(
		then: ThenFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalThenFragmentShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushThen(then);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalThenFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
