import type {BoolValue} from "./BoolValue.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithIfWithFinalElseVertexShaderSourceCodeMainStatements
	implements WithFinalElseVertexShaderSourceCodeMainStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: WithFinalElseVertexShaderSourceCodeMainStatements;
	public constructor(
		condition: BoolValue,
		restStatements: WithFinalElseVertexShaderSourceCodeMainStatements,
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
