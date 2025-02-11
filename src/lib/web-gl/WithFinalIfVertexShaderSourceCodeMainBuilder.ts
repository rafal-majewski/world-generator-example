import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {FinalThenVertexShaderSourceCodeMainStatements} from "./FinalThenVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
import {WithFinalThenVertexShaderSourceCodeMainBuilder} from "./WithFinalThenStatementVertexShaderSourceCodeMainBuilder.ts";
export class WithFinalIfVertexShaderSourceCodeMainBuilder {
	private readonly statements: WithFinalIfVertexShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalIfVertexShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public then_(
		body: FinalizedCustomFunctionStatements,
	): WithFinalThenVertexShaderSourceCodeMainBuilder {
		const then_ = new FinalThenVertexShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushThen(then_);
		const newBuilder = new WithFinalThenVertexShaderSourceCodeMainBuilder(newStatements);
		return newBuilder;
	}
}
