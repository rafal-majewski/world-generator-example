import type {RgbColor} from "./RgbColor.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type TerrainVertex = Readonly<{
	position: XyzCoordinates;
	normal: XyzCoordinates;
	color: RgbColor;
}>;
