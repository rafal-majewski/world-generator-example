import type {Serializer} from "./Serializer.ts";
import {serializeTriangles} from "./serializeTriangles.ts";
import type {VertexSelectors} from "./VertexSelectors.ts";
export function computeBufferData<Triangle, Vertex>(
	triangles: readonly Triangle[],
	vertexSelectors: VertexSelectors<Triangle, Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): Float32Array {
	const serializedTriangles = serializeTriangles(triangles, vertexSelectors, vertexSerializers);
	const bufferData = new Float32Array(serializedTriangles);
	return bufferData;
}
