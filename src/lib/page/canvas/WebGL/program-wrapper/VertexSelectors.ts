import type {VertexSelector} from "./VertexSelector.ts";
export type VertexSelectors<Triangle, Vertex> = readonly [
	VertexSelector<Triangle, Vertex>,
	VertexSelector<Triangle, Vertex>,
	VertexSelector<Triangle, Vertex>,
];
