import type {CustomFunction} from "./CustomFunction.ts";
import type {CustomFunctionDefinitionBuilder} from "./CustomFunctionDefinitionBuilder.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithSetStatementsCustomFunctionDeclarationBuilder} from "./WithSetStatementsCustomFunctionDeclarationBuilder.ts";
export type WithSetStatementsCustomFunctionDeclarationBuilderCreator<
	NameToUse extends VariableName,
	CustomFunctionToUse extends CustomFunction,
> = (builder: CustomFunctionDefinitionBuilder) => WithSetStatementsCustomFunctionDeclarationBuilder;
