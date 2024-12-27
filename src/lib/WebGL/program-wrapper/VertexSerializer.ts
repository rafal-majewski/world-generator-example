export type VertexSerializer<Triangle, Length extends number> = (
	triangle: Triangle,
) => readonly number[] & Readonly<{length: Length}>;
