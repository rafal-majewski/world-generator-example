import type {BoolValue} from "./BoolValue.ts";
import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithIfWithFinalElseVertexShaderMainSpecificationStatements
	implements WithFinalElseVertexShaderMainSpecificationStatements
{
	private readonly condition: BoolValue;
	private readonly body: FinalizedVertexShaderMainSpecificationStatements;
	private readonly else_: FinalElseVertexShaderMainSpecificationStatements;
	public constructor(
		condition: BoolValue,
		body: FinalizedVertexShaderMainSpecificationStatements,
		else_: FinalElseVertexShaderMainSpecificationStatements,
	) {
		this.condition = condition;
		this.body = body;
		this.else_ = else_;
	}
	public stringify(indentationLevel: number): string {
		const indentation: string = "\t".repeat(indentationLevel);
		const stringifiedCondition = this.condition.stringify();
		const stringifiedBody = this.body.stringify(indentationLevel + 1);
		const stringifiedElse = this.else_.stringify(indentationLevel);
		return `${indentation}if (${stringifiedCondition}) {
${stringifiedBody}
${indentation}
} ${stringifiedElse}`;
	}
}
