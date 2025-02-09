import {FinalElseVertexShaderMainSpecificationStatements} from "./FinalElseShaderMainSpecificationStatements.ts";
import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import {WithFinalElseVertexShaderMainSpecificationBuilder} from "./WithFinalElseStatementVertexShaderMainSpecificationBuilder.ts";
import type {WithFinalThenVertexShaderMainSpecificationStatements} from "./WithFinalThenVertexShaderMainSpecificationStatements.ts";
export class WithFinalThenVertexShaderMainSpecificationBuilder {
	private readonly statements: WithFinalThenVertexShaderMainSpecificationStatements;
	public constructor(statements: WithFinalThenVertexShaderMainSpecificationStatements) {
		this.statements = statements;
	}
	public else_(
		body: FinalizedVertexShaderMainSpecificationStatements,
	): WithFinalElseVertexShaderMainSpecificationBuilder {
		const else_ = new FinalElseVertexShaderMainSpecificationStatements(body);
		const newStatements = this.statements.pushElse(else_);
		const newBuilder = new WithFinalElseVertexShaderMainSpecificationBuilder(newStatements);
		return newBuilder;
	}
}
