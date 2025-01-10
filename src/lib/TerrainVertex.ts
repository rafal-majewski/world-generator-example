import type {TerrainMaterial} from "./TerrainMaterial.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type TerrainVertex = Readonly<{
	position: XyzCoordinates;
	normal: XyzCoordinates;
	material: TerrainMaterial;
}>;
