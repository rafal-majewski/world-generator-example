import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {FinalThenFragmentShaderSourceCodeMainStatements} from "./FinalThenFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalIfFragmentShaderSourceCodeMainStatements} from "./WithFinalIfFragmentShaderSourceCodeMainStatements.ts";
import {WithFinalThenFragmentShaderSourceCodeMainBuilder} from "./WithFinalThenStatementFragmentShaderSourceCodeMainBuilder.ts";
export class WithFinalIfFragmentShaderSourceCodeMainBuilder {
	private readonly statements: WithFinalIfFragmentShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalIfFragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public then_(
		body: FinalizedCustomFunctionStatements,
	): WithFinalThenFragmentShaderSourceCodeMainBuilder {
		const then_ = new FinalThenFragmentShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushThen(then_);
		const newBuilder = new WithFinalThenFragmentShaderSourceCodeMainBuilder(newStatements);
		return newBuilder;
	}
}
