import type {CustomFunction} from "./CustomFunction.ts";
import type {VariableName} from "./VariableName.ts";
export class CustomFunctionDefinition {
	public readonly function_: CustomFunction;
	public readonly name: VariableName;
	public constructor(name: VariableName, function_: CustomFunction) {
		this.name = name;
		this.function_ = function_;
	}
}
