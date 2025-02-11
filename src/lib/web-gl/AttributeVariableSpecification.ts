import type {VariableSpecification} from "./VariableSpecification.ts";
export interface AttributeVariableSpecification<Vertex> extends VariableSpecification {
	serialize(Vertex: Vertex): readonly number[];
	readonly size: number;
}
