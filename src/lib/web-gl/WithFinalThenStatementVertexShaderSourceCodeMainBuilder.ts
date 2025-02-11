import {FinalElseVertexShaderSourceCodeMainStatements} from "./FinalElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {WithFinalElseVertexShaderSourceCodeMainBuilder} from "./WithFinalElseStatementVertexShaderSourceCodeMainBuilder.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class WithFinalThenVertexShaderSourceCodeMainBuilder {
	private readonly statements: WithFinalThenVertexShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalThenVertexShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public else_(
		body: FinalizedCustomFunctionStatements,
	): WithFinalElseVertexShaderSourceCodeMainBuilder {
		const else_ = new FinalElseVertexShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushElse(else_);
		const newBuilder = new WithFinalElseVertexShaderSourceCodeMainBuilder(newStatements);
		return newBuilder;
	}
}
