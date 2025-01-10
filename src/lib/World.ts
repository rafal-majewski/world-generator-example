import type {GrassVertex} from "./GrassVertex.ts";
import type {TerrainVertex} from "./TerrainVertex.ts";
import type {Triangle} from "./web-gl/Triangle.ts";
export type World = Readonly<{
	grassTriangles: readonly Triangle<GrassVertex>[];
	terrainTriangles: readonly Triangle<TerrainVertex>[];
}>;
