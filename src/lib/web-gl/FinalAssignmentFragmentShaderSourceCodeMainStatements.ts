import type {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import type {FinalIfFragmentShaderSourceCodeMainStatements} from "./FinalIfFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentFragmentShaderSourceCodeMainStatements} from "./WithFinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
export class FinalAssignmentFragmentShaderSourceCodeMainStatements
	implements WithFinalAssignmentFragmentShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	constructor(name: VariableName, value: Value) {
		this.name = name;
		this.value = value;
	}
	public pushIf(
		if_: FinalIfFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalIfFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				if_,
			);
		return newStatements;
	}
	public pushAssignment(
		assignment: FinalAssignmentFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				assignment,
			);
		return newStatements;
	}
	public pushAssignments(
		assignments: FinalAssignmentsFragmentShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements(
				this.name,
				this.value,
				assignments,
			);
		return newStatements;
	}
}
