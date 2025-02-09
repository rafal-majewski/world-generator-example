import type {BoolValue} from "./BoolValue.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements
	implements WithFinalElseVertexShaderMainSpecificationStatements
{
	private readonly condition: BoolValue;
	private readonly restStatements: WithFinalElseVertexShaderMainSpecificationStatements;
	public constructor(
		condition: BoolValue,
		restStatements: WithFinalElseVertexShaderMainSpecificationStatements,
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
