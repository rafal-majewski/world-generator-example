import type {FinalizedVertexShaderMainSpecificationBuilder} from "./FinalizedVertexShaderMainSpecificationBuilder.ts";
import {VertexShaderMainSpecification} from "./VertexShaderMainSpecification.ts";
import type {WithFinalAssignmentsVertexShaderMainSpecificationStatements} from "./WithFinalAssignmentsVertexShaderMainSpecificationStatements.ts";
export class WithFinalAssignmentsVertexShaderMainSpecificationBuilder
	implements FinalizedVertexShaderMainSpecificationBuilder
{
	private readonly statements: WithFinalAssignmentsVertexShaderMainSpecificationStatements;
	public constructor(statements: WithFinalAssignmentsVertexShaderMainSpecificationStatements) {
		this.statements = statements;
	}
	public build(): VertexShaderMainSpecification {
		const specification = new VertexShaderMainSpecification(this.statements);
		return specification;
	}
}
