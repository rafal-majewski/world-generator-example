import type {RgbColor} from "./RgbColor.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type Triangle = Readonly<{
	vertexPositions: Readonly<Record<1 | 2 | 3, XyzCoordinates>>;
	color: RgbColor;
}>;
