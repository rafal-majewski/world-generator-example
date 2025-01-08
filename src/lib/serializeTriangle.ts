import type {Serializer} from "./Serializer.ts";
import {serializeVertex} from "./serializeVertex.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
export function serializeTriangle<Triangle, Vertex>(
	triangle: Triangle,
	verticesSelector: VerticesSelector<Triangle, Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const vertices = verticesSelector(triangle);
	const serializedTriangle: readonly number[] = vertices.flatMap((vertex) => {
		const serializedVertex = serializeVertex(vertex, vertexSerializers);
		return serializedVertex;
	});
	return serializedTriangle;
}
