import type {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import type {AssignmentFragmentShaderSourceCodeMainStatements} from "./AssignmentFragmentShaderSourceCodeMainStatements.ts";
import type {IfFragmentShaderSourceCodeMainStatements} from "./IfFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentFragmentShaderSourceCodeMainStatements} from "./WithFinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements
	implements WithFinalAssignmentFragmentShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalAssignmentFragmentShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalAssignmentFragmentShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushAssignment(
		assignment: AssignmentFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushAssignment(assignment);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
	public pushIf(
		if_: IfFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushIf(if_);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
	public pushFinalAssignments(
		finalAssignments: FinalAssignmentsFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushFinalAssignments(finalAssignments);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
