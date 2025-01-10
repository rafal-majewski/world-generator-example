import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type Grass = Readonly<{
	height: number;
	plantPosition: XyzCoordinates;
	angleRadians: number;
}>;
