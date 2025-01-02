import type {Serializer} from "./Serializer.ts";
import {serializeTriangle} from "./serializeTriangle.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
export function serializeTriangles<Triangle, Vertex>(
	triangles: readonly Triangle[],
	verticesSelector: VerticesSelector<Triangle, Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedTriangles: readonly number[] = triangles.flatMap((triangle) => {
		const serializedTriangle = serializeTriangle(triangle, verticesSelector, vertexSerializers);
		return serializedTriangle;
	});
	return serializedTriangles;
}
