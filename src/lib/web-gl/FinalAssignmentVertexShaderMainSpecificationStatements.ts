import type {FinalAssignmentsVertexShaderMainSpecificationStatements} from "./FinalAssignmentsVertexShaderMainSpecificationStatements.ts";
import type {FinalIfVertexShaderMainSpecificationStatements} from "./FinalIfVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentVertexShaderMainSpecificationStatements} from "./WithFinalAssignmentVertexShaderMainSpecificationStatements.ts";
export class FinalAssignmentVertexShaderMainSpecificationStatements
	implements WithFinalAssignmentVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	constructor(name: VariableName, value: Value) {
		this.name = name;
		this.value = value;
	}
	public pushIf(
		if_: FinalIfVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				if_,
			);
		return newStatements;
	}
	public pushAssignment(
		assignment: FinalAssignmentVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				assignment,
			);
		return newStatements;
	}
	public pushAssignments(
		assignments: FinalAssignmentsVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				assignments,
			);
		return newStatements;
	}
}
