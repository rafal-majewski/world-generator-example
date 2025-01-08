import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type TriangleVertex = Readonly<{
	position: XyzCoordinates;
	normal: XyzCoordinates;
}>;
