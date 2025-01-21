import type {XyCoordinates} from "./XyCoordinates.ts";
export type LayerConfiguration = Readonly<{
	amplitude: number;
	frequency: number;
	shiftRadians: XyCoordinates;
	angleRadians: number;
}>;
