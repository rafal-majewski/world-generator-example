import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class FinalElseVertexShaderSourceCodeMainStatements
	implements WithFinalElseVertexShaderSourceCodeMainStatements
{
	private readonly body: FinalizedCustomFunctionStatements;
	public constructor(body: FinalizedCustomFunctionStatements) {
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
