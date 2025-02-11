import type {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {FinalAssignmentVertexShaderSourceCodeMainStatements} from "./FinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import type {FinalIfVertexShaderSourceCodeMainStatements} from "./FinalIfVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements} from "./IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./WithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements
	implements WithFinalAssignmentVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalAssignmentVertexShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalAssignmentVertexShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushAssignment(
		assignment: FinalAssignmentVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushAssignment(assignment);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
	public pushIf(
		if_: FinalIfVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushIf(if_);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalIfVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
	public pushFinalAssignments(
		assignments: FinalAssignmentsVertexShaderSourceCodeMainStatements,
	): IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements {
		const newRestStatements = this.restStatements.pushFinalAssignments(assignments);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
