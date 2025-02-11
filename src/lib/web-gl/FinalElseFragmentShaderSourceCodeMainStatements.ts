import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export class FinalElseFragmentShaderSourceCodeMainStatements
	implements WithFinalElseFragmentShaderSourceCodeMainStatements
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
