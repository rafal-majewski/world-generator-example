import type {FinalIfVertexShaderMainSpecificationStatements} from "./FinalIfVertexShaderMainSpecificationStatements.ts";
import {IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements} from "./IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalIfVertexShaderMainSpecificationStatements} from "./WithFinalIfVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalIfVertexShaderMainSpecificationStatements
	implements WithFinalIfVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly if_: FinalIfVertexShaderMainSpecificationStatements;
	public constructor(
		name: VariableName,
		value: Value,
		if_: FinalIfVertexShaderMainSpecificationStatements,
	) {
		this.name = name;
		this.value = value;
		this.if_ = if_;
	}
	public pushElse(): IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements {
		const newStatements =
			new IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements();
		return newStatements;
	}
}
