import type {VertexShaderMainSpecificationStatements} from "./VertexShaderMainSpecificationStatements.ts";

export class VertexShaderMainSpecification {
	private readonly statements: VertexShaderMainSpecificationStatements;
	public constructor(statements: VertexShaderMainSpecificationStatements) {
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
