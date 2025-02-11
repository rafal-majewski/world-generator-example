import type {FinalizedFragmentShaderSourceCodeMainBuilder} from "./FinalizedFragmentShaderSourceCodeMainBuilder.ts";
import {FragmentShaderSourceCodeMain} from "./FragmentShaderSourceCodeMain.ts";
import type {WithFinalElseFragmentShaderSourceCodeMainStatements} from "./WithFinalElseFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalElseFragmentShaderSourceCodeMainBuilder
	implements FinalizedFragmentShaderSourceCodeMainBuilder
{
	private readonly statements: WithFinalElseFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalElseFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): FragmentShaderSourceCodeMain {
		const specification = new FragmentShaderSourceCodeMain(this.statements);
		return specification;
	}
}
