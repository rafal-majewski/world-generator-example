import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type WorldViewer = Readonly<{
	position: XyzCoordinates;
	chunkCountInOneDimension: number;
	minimalDistanceToLowerDetailLevel: number;
	distanceToLowerDetailLevelExponent: number;
}>;
