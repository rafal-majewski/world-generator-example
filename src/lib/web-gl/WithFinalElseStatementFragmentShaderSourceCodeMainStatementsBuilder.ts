import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilder} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder
	implements FinalizedFragmentShaderSourceCodeMainStatementsBuilder
{
	private readonly statements: WithFinalElseFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalElseFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): WithFinalElseFragmentShaderSourceCodeMainStatements {
		return this.statements;
	}
}
