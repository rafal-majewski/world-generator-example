import type {VariableName} from "../../variable-name/VariableName.ts";
import type {VariableNameToVariableType} from "../../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {variableTypeToVariableSize} from "../../variable-type-to-variable-size/variableTypeToVariableSize.ts";
import type {TriangleSerializer} from "../triangle-serializer/TriangleSerializer.ts";
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
