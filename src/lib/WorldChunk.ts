import type {TerrainVertex} from "./TerrainVertex.ts";
import type {Triangle} from "./web-gl/Triangle.ts";
export interface WorldChunk {
	readonly terrainTriangles: readonly Triangle<TerrainVertex>[];
}