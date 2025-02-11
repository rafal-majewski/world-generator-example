import type {AttributeVariableSpecification} from "./AttributeVariableSpecification.ts";
import type {Triangle} from "./Triangle.ts";
export class BufferDataComputer<Vertex> {
	private readonly attributeVariableSpecifications: readonly AttributeVariableSpecification<Vertex>[];
	public constructor(
		attributeVariableSpecifications: readonly AttributeVariableSpecification<Vertex>[],
	) {
		this.attributeVariableSpecifications = attributeVariableSpecifications;
	}
	public compute(triangles: readonly Triangle<Vertex>[]): Float32Array {
		return new Float32Array(
			triangles.flatMap((triangle) =>
				triangle.flatMap((vertex) =>
					this.attributeVariableSpecifications.flatMap((atributeVariableSpecification) =>
						atributeVariableSpecification.serialize(vertex),
					),
				),
			),
		);
	}
}
