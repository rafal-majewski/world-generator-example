import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalThenVertexShaderMainSpecificationStatements} from "./WithFinalThenVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalThenVertexShaderMainSpecificationStatements
	implements WithFinalThenVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalThenVertexShaderMainSpecificationStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalThenVertexShaderMainSpecificationStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushElse(
		else_: FinalElseVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements {
		const newRestStatements = this.restStatements.pushElse(else_);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
