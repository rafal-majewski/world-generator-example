import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
export class VertexShaderSourceCodeMain {
	private readonly body: FinalizedCustomFunctionStatements;
	public constructor(body: FinalizedCustomFunctionStatements) {
		this.body = body;
	}
	public stringify(): string {
		const stringifiedBody = this.body.stringify(1);
		const result = `void main() {
${stringifiedBody}
}
`;
		return result;
	}
}
