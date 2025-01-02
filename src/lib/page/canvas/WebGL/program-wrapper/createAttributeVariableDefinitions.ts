import type {VariableDefinition} from "./VariableDefinition.ts";
import type {VariableName} from "./VariableName.ts";
export function createAttributeVariableDefinitions<
	AttributeVariableName extends VariableName,
	Vertex,
>(
	attributeVariableNames: readonly AttributeVariableName[],
	attributeVariableNameToVariableDefinition: Readonly<
		Record<AttributeVariableName, VariableDefinition<Vertex>>
	>,
): readonly VariableDefinition<Vertex>[] {
	const attributeVariableDefinitions: readonly VariableDefinition<Vertex>[] =
		attributeVariableNames.map(
			(variableName) => attributeVariableNameToVariableDefinition[variableName],
		);
	return attributeVariableDefinitions;
}
