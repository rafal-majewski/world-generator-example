import type {RgbColor} from "./RgbColor.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type Block = Readonly<{
	position: XyzCoordinates;
	color: RgbColor;
}>;
