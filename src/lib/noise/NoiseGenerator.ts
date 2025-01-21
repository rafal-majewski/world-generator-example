import type {XyCoordinates} from "./XyCoordinates.ts";
export interface NoiseGenerator {
	compute(position: XyCoordinates): number;
}
