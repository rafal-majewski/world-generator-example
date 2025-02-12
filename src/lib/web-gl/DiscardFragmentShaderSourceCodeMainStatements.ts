import type {WithFinalDiscardFragmentShaderSourceCodeMainStatements} from "./WithFinalDiscardFragmentShaderSourceCodeMainStatements.ts";
export class DiscardFragmentShaderSourceCodeMainStatements
	implements WithFinalDiscardFragmentShaderSourceCodeMainStatements
{
	public stringify(indentationLevel: number): string {
		const identation = "\t".repeat(indentationLevel);
		return `${identation}discard;`;
	}
}
