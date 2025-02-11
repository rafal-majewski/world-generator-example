import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilder} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder
	implements FinalizedFragmentShaderSourceCodeMainStatementsBuilder
{
	private readonly statements: WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements {
		return this.statements;
	}
}
