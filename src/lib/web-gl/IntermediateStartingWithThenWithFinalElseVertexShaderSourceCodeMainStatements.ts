import type {FinalElseVertexShaderSourceCodeMainStatements} from "./FinalElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements
	implements WithFinalElseVertexShaderSourceCodeMainStatements
{
	private readonly body: FinalizedCustomFunctionStatements;
	private readonly restStatements: FinalElseVertexShaderSourceCodeMainStatements;
	public constructor(
		body: FinalizedCustomFunctionStatements,
		restStatements: FinalElseVertexShaderSourceCodeMainStatements,
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
