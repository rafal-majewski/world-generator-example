import type {FinalizedVertexShaderSourceCodeMainStatements} from "./FinalizedVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalElseVertexShaderSourceCodeMainStatements
	implements WithFinalElseVertexShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: FinalizedVertexShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: FinalizedVertexShaderSourceCodeMainStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public stringify(indentationLevel: number): string {
		const indentation: string = "\t".repeat(indentationLevel);
		const stringifiedValue = this.value.stringify();
		const stringifiedRestStatements = this.restStatements.stringify(indentationLevel);
		return `${indentation}${this.value.type} l_${this.name} = ${stringifiedValue};
${stringifiedRestStatements}`;
	}
}
