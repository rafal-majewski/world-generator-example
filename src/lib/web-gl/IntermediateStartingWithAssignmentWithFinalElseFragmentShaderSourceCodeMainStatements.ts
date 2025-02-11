import type {FinalizedFragmentShaderSourceCodeMainStatements} from "./FinalizedFragmentShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalElseFragmentShaderSourceCodeMainStatements
	implements WithFinalElseFragmentShaderSourceCodeMainStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: FinalizedFragmentShaderSourceCodeMainStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: FinalizedFragmentShaderSourceCodeMainStatements,
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
