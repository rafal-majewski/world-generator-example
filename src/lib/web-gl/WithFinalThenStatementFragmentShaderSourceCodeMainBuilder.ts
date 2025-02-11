import {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {WithFinalElseFragmentShaderSourceCodeMainBuilder} from "./WithFinalElseStatementFragmentShaderSourceCodeMainBuilder.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalThenFragmentShaderSourceCodeMainBuilder {
	private readonly statements: WithFinalThenFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalThenFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public else_(
		body: FinalizedCustomFunctionStatements,
	): WithFinalElseFragmentShaderSourceCodeMainBuilder {
		const else_ = new FinalElseFragmentShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushElse(else_);
		const newBuilder = new WithFinalElseFragmentShaderSourceCodeMainBuilder(newStatements);
		return newBuilder;
	}
}
