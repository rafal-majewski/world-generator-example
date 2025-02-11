import type {BoolValue} from "./BoolValue.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithIfWithFinalElseFragmentShaderSourceCodeMainStatements
	implements WithFinalElseFragmentShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: WithFinalElseFragmentShaderSourceCodeMainStatements;
	public constructor(
		condition: BoolValue,
		restStatements: WithFinalElseFragmentShaderSourceCodeMainStatements,
	) {
		this.condition = condition;
		this.restStatements = restStatements;
	}
	public stringify(indentationLevel: number): string {
		const indentation: string = "\t".repeat(indentationLevel);
		const stringifiedCondition = this.condition.stringify();
		const stringifiedRestStatements = this.restStatements.stringify(indentationLevel);
		return `${indentation}if (${stringifiedCondition}) ${stringifiedRestStatements}`;
	}
}
