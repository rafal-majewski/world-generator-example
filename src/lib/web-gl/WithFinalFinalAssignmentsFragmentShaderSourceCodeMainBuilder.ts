import type {FinalizedFragmentShaderSourceCodeMainBuilder} from "./FinalizedFragmentShaderSourceCodeMainBuilder.ts";
import {FragmentShaderSourceCodeMain} from "./FragmentShaderSourceCodeMain.ts";
import type {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder
	implements FinalizedFragmentShaderSourceCodeMainBuilder
{
	private readonly statements: WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): FragmentShaderSourceCodeMain {
		const specification = new FragmentShaderSourceCodeMain(this.statements);
		return specification;
	}
}
