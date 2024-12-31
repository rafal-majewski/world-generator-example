import type {Serializer} from "./Serializer.ts";
import {serializeVertex} from "./serializeVertex.ts";
import type {VertexSelectors} from "./VertexSelectors.ts";
export function serializeTriangle<Triangle, Vertex>(
	triangle: Triangle,
	vertexSelectors: VertexSelectors<Triangle, Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedTriangle: readonly number[] = vertexSelectors.flatMap((vertexSelector) => {
		const vertex = vertexSelector(triangle);
		const serializedVertex = serializeVertex(vertex, vertexSerializers);
		return serializedVertex;
	});
	return serializedTriangle;
}
