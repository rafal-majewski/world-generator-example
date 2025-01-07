import {terrainHeightNoiseGenerator} from "./terrainHeightNoiseGenerator.ts";
import type {XzCoordinates} from "./XzCoordinates.ts";
export function computeTerrainHeight(position: XzCoordinates): number {
	const height =
		terrainHeightNoiseGenerator.compute({
			x: position.x,
			y: position.z,
		}) * 5;
	return height;
}
