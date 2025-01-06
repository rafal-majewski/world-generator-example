export type VerticesSelector<Triangle, Vertex> = (
	triangle: Triangle,
) => Readonly<Record<1 | 2 | 3, Vertex>>;
