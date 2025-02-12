import type {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {IfVertexShaderSourceCodeMainStatements} from "./IfVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./WithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
export class AssignmentVertexShaderSourceCodeMainStatements
	implements WithFinalAssignmentVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	constructor(name: VariableName, value: Value) {
		this.name = name;
		this.value = value;
	}
	public pushIf(
		if_: IfVertexShaderSourceCodeMainStatements,
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
		assignment: AssignmentVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				assignment,
			);
		return newStatements;
	}
	public pushFinalAssignments(
		finalAssignments: FinalAssignmentsVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				finalAssignments,
			);
		return newStatements;
	}
}
