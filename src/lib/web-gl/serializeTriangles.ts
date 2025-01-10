import type {Serializer} from "./Serializer.ts";
import {serializeTriangle} from "./serializeTriangle.ts";
import type {Triangle} from "./Triangle.ts";
export function serializeTriangles<Vertex>(
	triangles: readonly Triangle<Vertex>[],
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedTriangles: readonly number[] = triangles.flatMap((triangle) => {
		const serializedTriangle = serializeTriangle(triangle, vertexSerializers);
		return serializedTriangle;
	});
	return serializedTriangles;
}
