import type {ElseVertexShaderSourceCodeMainStatements} from "./ElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedVertexShaderSourceCodeMainStatements} from "./FinalizedVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithThenWithFinalElseVertexShaderSourceCodeMainStatements
	implements WithFinalElseVertexShaderSourceCodeMainStatements
{
	private readonly body: FinalizedVertexShaderSourceCodeMainStatements;
	private readonly restStatements: ElseVertexShaderSourceCodeMainStatements;
	public constructor(
		body: FinalizedVertexShaderSourceCodeMainStatements,
		restStatements: ElseVertexShaderSourceCodeMainStatements,
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
