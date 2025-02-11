import type {RgbColor} from "./RgbColor.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type TerrainVoxel = Readonly<{
	position: XyzCoordinates;
	color: RgbColor;
}>;
