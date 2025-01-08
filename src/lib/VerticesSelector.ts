import type {VertexSelection} from "./VertexSelection.ts";
export type VerticesSelector<Triangle, Vertex> = (triangle: Triangle) => VertexSelection<Vertex>;
