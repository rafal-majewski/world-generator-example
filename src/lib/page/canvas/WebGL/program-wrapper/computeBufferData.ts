import type {Serializer} from "./Serializer.ts";
import {serializeTriangles} from "./serializeTriangles.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
export function computeBufferData<Triangle, Vertex>(
	triangles: readonly Triangle[],
	verticesSelector: VerticesSelector<Triangle, Vertex>,
	vertexSerializers: readonly Serializer<Vertex>[],
): Float32Array {
	const serializedTriangles = serializeTriangles(triangles, verticesSelector, vertexSerializers);
	const bufferData = new Float32Array(serializedTriangles);
	return bufferData;
}
