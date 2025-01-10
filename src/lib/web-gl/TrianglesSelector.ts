import type {Triangle} from "./Triangle.ts";
export type TrianglesSelector<Scene, Vertex> = (scene: Scene) => readonly Triangle<Vertex>[];
