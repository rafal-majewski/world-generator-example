import type {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithThenWithFinalElseVertexShaderMainSpecificationStatements
	implements WithFinalElseVertexShaderMainSpecificationStatements
{
	private readonly body: FinalizedVertexShaderMainSpecificationStatements;
	private readonly restStatements: FinalElseVertexShaderMainSpecificationStatements;
	public constructor(
		body: FinalizedVertexShaderMainSpecificationStatements,
		restStatements: FinalElseVertexShaderMainSpecificationStatements,
	) {
		this.body = body;
		this.restStatements = restStatements;
	}
	public stringify(indentationLevel: number): string {
		const indentation: string = "\t".repeat(indentationLevel);
		const stringifiedBody = this.body.stringify(indentationLevel + 1);
		const stringifiedRestStatements = this.restStatements.stringify(indentationLevel);
		return `{
${stringifiedBody}
${indentation}} ${stringifiedRestStatements}`;
	}
}
