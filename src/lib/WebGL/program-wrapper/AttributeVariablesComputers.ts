import type {VariableName} from "../VariableName.ts";
import type {VariableNameToVariableType} from "../VariableNameToVariableType.ts";
import type {variableTypeToVariableSize} from "../variableTypeToVariableSize.ts";
import type {TriangleSerializer} from "./TriangleSerializer.ts";
export type AttributeVariablesComputers<
	AttributeVariableName extends VariableName,
	Triangle,
	AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
> = Readonly<{
	[CurrentVariableName in AttributeVariableName]: TriangleSerializer<
		Triangle,
		(typeof variableTypeToVariableSize)[AttributeVariableNameToVariableType[CurrentVariableName]]
	>;
}>;
