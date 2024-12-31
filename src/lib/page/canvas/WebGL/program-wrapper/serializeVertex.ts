import type {Serializer} from "./Serializer.ts";
export function serializeVertex<Vertex>(
	vertex: Vertex,
	vertexSerializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedVertex: readonly number[] = vertexSerializers.flatMap((vertexSerializer) =>
		vertexSerializer.serialize(vertex),
	);
	return serializedVertex;
}
