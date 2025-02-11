import type {FragmentShaderSourceCodeMainStatements} from "./FragmentShaderSourceCodeMainStatements.ts";
export class FragmentShaderSourceCodeMain {
	private readonly statements: FragmentShaderSourceCodeMainStatements;
	public constructor(statements: FragmentShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public stringify(): string {
		const stringifiedBody = this.statements.stringify(1);
		const result = `void main() {
${stringifiedBody}
}
`;
		return result;
	}
}
