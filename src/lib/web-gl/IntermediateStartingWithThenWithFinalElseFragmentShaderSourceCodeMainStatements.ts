import type {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatements} from "./FinalizedFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export class IntermediateStartingWithThenWithFinalElseFragmentShaderSourceCodeMainStatements
	implements WithFinalElseFragmentShaderSourceCodeMainStatements
{
	private readonly body: FinalizedFragmentShaderSourceCodeMainStatements;
	private readonly restStatements: FinalElseFragmentShaderSourceCodeMainStatements;
	public constructor(
		body: FinalizedFragmentShaderSourceCodeMainStatements,
		restStatements: FinalElseFragmentShaderSourceCodeMainStatements,
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
