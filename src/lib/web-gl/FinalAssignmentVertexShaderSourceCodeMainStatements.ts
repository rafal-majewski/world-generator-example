import type {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {FinalIfVertexShaderSourceCodeMainStatements} from "./FinalIfVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./WithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
export class FinalAssignmentVertexShaderSourceCodeMainStatements
	implements WithFinalAssignmentVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	constructor(name: VariableName, value: Value) {
		this.name = name;
		this.value = value;
	}
	public pushIf(
		if_: FinalIfVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				if_,
			);
		return newStatements;
	}
	public pushAssignment(
		assignment: FinalAssignmentVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				assignment,
			);
		return newStatements;
	}
	public pushAssignments(
		assignments: FinalAssignmentsVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				assignments,
			);
		return newStatements;
	}
}
