import type {Serializer} from "./Serializer.ts";
import {serializeTriangles} from "./serializeTriangles.ts";
import type {Triangle} from "./Triangle.ts";
export function computeBufferData<Vertex>(
	triangles: readonly Triangle<Vertex>[],
	vertexSerializers: readonly Serializer<Vertex>[],
): Float32Array {
	const serializedTriangles = serializeTriangles(triangles, vertexSerializers);
	const bufferData = new Float32Array(serializedTriangles);
	return bufferData;
}
