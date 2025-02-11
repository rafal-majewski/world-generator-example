import type {FinalizedVertexShaderSourceCodeMainStatementsBuilder} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
export class WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder
	implements FinalizedVertexShaderSourceCodeMainStatementsBuilder
{
	private readonly statements: WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements {
		return this.statements;
	}
}
