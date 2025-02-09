import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export class FinalElseVertexShaderMainSpecificationStatements
	implements WithFinalElseVertexShaderMainSpecificationStatements
{
	private readonly body: FinalizedVertexShaderMainSpecificationStatements;
	public constructor(body: FinalizedVertexShaderMainSpecificationStatements) {
		this.body = body;
	}
	public stringify(indentationLevel: number): string {
		const indentation: string = "\t".repeat(indentationLevel);
		const stringifiedBody = this.body.stringify(indentationLevel);
		return `else {
${stringifiedBody}
${indentation}}`;
	}
}
