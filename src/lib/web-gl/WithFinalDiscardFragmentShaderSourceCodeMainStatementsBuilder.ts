import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilder} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalDiscardFragmentShaderSourceCodeMainStatements} from "./WithFinalDiscardFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalDiscardFragmentShaderSourceCodeMainStatementsBuilder
	implements FinalizedFragmentShaderSourceCodeMainStatementsBuilder
{
	private readonly statements: WithFinalDiscardFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalDiscardFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): WithFinalDiscardFragmentShaderSourceCodeMainStatements {
		return this.statements;
	}
}
