import type {RgbColor} from "./RgbColor.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type Vertex = Readonly<{
	position: XyzCoordinates;
	color: RgbColor;
}>;
