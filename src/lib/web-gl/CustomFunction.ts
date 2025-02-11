import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import type {VariableType} from "./VariableType.ts";
export class CustomFunction {
	private readonly type: VariableType;
	private readonly body: FinalizedCustomFunctionStatements;
	public constructor(type: VariableType, body: FinalizedCustomFunctionStatements) {
		this.type = type;
		this.body = body;
	}
	public stringify(name: string): string {
		const stringifiedBody = this.body.stringify(1);
		return `${this.type} ${name}() {
${stringifiedBody}
}
`;
	}
}
