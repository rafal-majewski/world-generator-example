import type {FinalizedVertexShaderSourceCodeMainStatementsBuilder} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class WithFinalElseVertexShaderSourceCodeMainStatementsBuilder
	implements FinalizedVertexShaderSourceCodeMainStatementsBuilder
{
	private readonly statements: WithFinalElseVertexShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalElseVertexShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): WithFinalElseVertexShaderSourceCodeMainStatements {
		return this.statements;
	}
}
