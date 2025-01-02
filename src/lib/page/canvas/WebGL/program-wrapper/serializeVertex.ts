import type {Serializer} from "./Serializer.ts";
export function serializeVertex<Vertex>(
	vertex: Vertex,
	serializers: readonly Serializer<Vertex>[],
): readonly number[] {
	const serializedVertex: readonly number[] = serializers.flatMap((serializer) => {
		const serializerResult = serializer.serialize(vertex);
		return serializerResult;
	});
	return serializedVertex;
}
