import type {FinalAssignmentsVertexShaderMainSpecificationStatements} from "./FinalAssignmentsVertexShaderMainSpecificationStatements.ts";
import type {FinalAssignmentVertexShaderMainSpecificationStatements} from "./FinalAssignmentVertexShaderMainSpecificationStatements.ts";
import type {FinalIfVertexShaderMainSpecificationStatements} from "./FinalIfVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentVertexShaderMainSpecificationStatements} from "./WithFinalAssignmentVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements
	implements WithFinalAssignmentVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalAssignmentVertexShaderMainSpecificationStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalAssignmentVertexShaderMainSpecificationStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushAssignment(
		assignment: FinalAssignmentVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements {
		const newRestStatements = this.restStatements.pushAssignment(assignment);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
	public pushIf(
		if_: FinalIfVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements {
		const newRestStatements = this.restStatements.pushIf(if_);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
	public pushAssignments(
		assignments: FinalAssignmentsVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements {
		const newRestStatements = this.restStatements.pushAssignments(assignments);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
