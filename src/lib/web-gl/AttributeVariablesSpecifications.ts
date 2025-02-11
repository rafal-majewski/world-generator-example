import type {AttributeVariableSpecification} from "./AttributeVariableSpecification.ts";
import type {VariableName} from "./VariableName.ts";
export type AttributeVariablesSpecifications<Vertex> = Readonly<
	Record<VariableName, AttributeVariableSpecification<Vertex>>
>;
