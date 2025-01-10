import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type GrassVertex = Readonly<{
	position: XyzCoordinates;
	normal: XyzCoordinates;
}>;
