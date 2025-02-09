import type {WithFinalAssignmentsVertexShaderMainSpecificationStatements} from "./WithFinalAssignmentsVertexShaderMainSpecificationStatements.ts";
export class VertexShaderMainSpecification {
	private readonly statements: WithFinalAssignmentsVertexShaderMainSpecificationStatements;
	public constructor(statements: WithFinalAssignmentsVertexShaderMainSpecificationStatements) {
		this.statements = statements;
	}
	public stringify(): string {
		const stringifiedStatements = this.statements.stringify(1);
		const result = `void main() {
${stringifiedStatements}
}
`;
		return result;
	}
}
