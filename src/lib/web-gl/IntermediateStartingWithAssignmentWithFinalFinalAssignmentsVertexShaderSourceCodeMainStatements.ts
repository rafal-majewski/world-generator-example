import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements
	implements WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements,
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
