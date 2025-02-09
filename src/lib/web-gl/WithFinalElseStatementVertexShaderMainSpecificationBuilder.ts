import type {FinalizedVertexShaderMainSpecificationBuilder} from "./FinalizedVertexShaderMainSpecificationBuilder.ts";
import {VertexShaderMainSpecification} from "./VertexShaderMainSpecification.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export class WithFinalElseVertexShaderMainSpecificationBuilder
	implements FinalizedVertexShaderMainSpecificationBuilder
{
	private readonly statements: WithFinalElseVertexShaderMainSpecificationStatements;
	public constructor(statements: WithFinalElseVertexShaderMainSpecificationStatements) {
		this.statements = statements;
	}
	public build(): VertexShaderMainSpecification {
		const specification = new VertexShaderMainSpecification(this.statements);
		return specification;
	}
}
