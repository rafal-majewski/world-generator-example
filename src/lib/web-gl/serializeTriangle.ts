import type {Serializer} from "./Serializer.ts";
import {serializeVertex} from "../serializeVertex.ts";
import type {Triangle} from "./Triangle.ts";
export function serializeTriangle<Vertex>(
	triangle: Triangle<Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedTriangle: readonly number[] = triangle.flatMap((vertex) => {
		const serializedVertex = serializeVertex(vertex, vertexSerializers);
		return serializedVertex;
	});
	return serializedTriangle;
}
