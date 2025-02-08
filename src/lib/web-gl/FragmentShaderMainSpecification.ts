import type {FragmentShaderMainSpecificationStatements} from "./FragmentShaderMainSpecificationStatements.ts";
export class FragmentShaderMainSpecification {
	private readonly statements: FragmentShaderMainSpecificationStatements;
	public constructor(statements: FragmentShaderMainSpecificationStatements) {
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
