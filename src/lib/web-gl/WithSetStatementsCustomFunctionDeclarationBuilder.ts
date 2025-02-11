import {CustomFunction} from "./CustomFunction.ts";
import type {FinalizedCustomFunctionStatements} from "./FinalizedCustomFunctionStatements.ts";
import {CustomFunctionDefinition} from "./ShaderSourceCodeFunctionDefinition.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
export class WithSetStatementsCustomFunctionDeclarationBuilder {
	private readonly name: VariableName;
	private readonly type: VariableType;
	private readonly body: FinalizedCustomFunctionStatements;
	public constructor(
		type: VariableType,
		name: VariableName,
		body: FinalizedCustomFunctionStatements,
	) {
		this.name = name;
		this.type = type;
		this.body = body;
	}
	public build(): CustomFunctionDefinition {
		const function_ = new CustomFunction(this.type, this.body);
		const definition = new CustomFunctionDefinition(this.name, function_);
		return definition;
	}
}
