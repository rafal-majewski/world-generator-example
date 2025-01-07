import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VerticesSelector} from "./VerticesSelector.ts";
export interface WebGlProgramWrapperSerializers<Vertex, Scene, Triangle> {
	trianglesSelector: TrianglesSelector<Scene, Triangle>;
	verticesSelector: VerticesSelector<Triangle, Vertex>;
}
