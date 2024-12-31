import type {Serializer} from "./Serializer.ts";
import {serializeTriangle} from "./serializeTriangle.ts";
import type {VertexSelectors} from "./VertexSelectors.ts";
export function serializeTriangles<Triangle, Vertex>(
	triangles: readonly Triangle[],
	vertexSelectors: VertexSelectors<Triangle, Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedTriangles: readonly number[] = triangles.flatMap((triangle) =>
		serializeTriangle(triangle, vertexSelectors, vertexSerializers),
	);
	return serializedTriangles;
}
