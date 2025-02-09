import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import {FinalThenVertexShaderMainSpecificationStatements} from "./FinalThenVertexShaderMainSpecificationStatements.ts";
import type {WithFinalIfVertexShaderMainSpecificationStatements} from "./WithFinalIfVertexShaderMainSpecificationStatements.ts";
import {WithFinalThenVertexShaderMainSpecificationBuilder} from "./WithFinalThenStatementVertexShaderMainSpecificationBuilder.ts";
export class WithFinalIfVertexShaderMainSpecificationBuilder {
	private readonly statements: WithFinalIfVertexShaderMainSpecificationStatements;
	public constructor(statements: WithFinalIfVertexShaderMainSpecificationStatements) {
		this.statements = statements;
	}
	public then_(
		body: FinalizedVertexShaderMainSpecificationStatements,
	): WithFinalThenVertexShaderMainSpecificationBuilder {
		const then_ = new FinalThenVertexShaderMainSpecificationStatements(body);
		const newStatements = this.statements.pushThen(then_);
		const newBuilder = new WithFinalThenVertexShaderMainSpecificationBuilder(newStatements);
		return newBuilder;
	}
}
