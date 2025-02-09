import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalAssignmentsVertexShaderMainSpecificationStatements} from "./WithFinalAssignmentsVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalAssignmentsVertexShaderMainSpecificationStatements
	implements WithFinalAssignmentsVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalAssignmentsVertexShaderMainSpecificationStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalAssignmentsVertexShaderMainSpecificationStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public stringify(indentationLevel: number): string {
		const indentation = "\t".repeat(indentationLevel);
		const strigifiedValue = this.value.stringify();
		const stringifiedRestStatements = this.restStatements.stringify(indentationLevel);
		return `${indentation}${this.value.type} l_${this.name} = ${strigifiedValue};
${stringifiedRestStatements}`;
	}
}
