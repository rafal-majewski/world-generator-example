import type {FinalThenVertexShaderMainSpecificationStatements} from "./FinalThenVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalThenVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalThenVertexShaderMainSpecificationStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalIfVertexShaderMainSpecificationStatements} from "./WithFinalIfVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements
	implements WithFinalIfVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalIfVertexShaderMainSpecificationStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalIfVertexShaderMainSpecificationStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public pushThen(
		then: FinalThenVertexShaderMainSpecificationStatements,
	): IntermediateStartingWithAssignmentWithFinalThenVertexShaderMainSpecificationStatements {
		const newRestStatements = this.restStatements.pushThen(then);
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalThenVertexShaderMainSpecificationStatements(
				this.name,
				this.value,
				newRestStatements,
			);
		return newStatements;
	}
}
