import type {Block} from "./Block.ts";
import {computeBlockColor} from "./computeBlockColor.ts";
import {computeTerrainHeight} from "./computeTerrainHeight.ts";
import type {RgbColor} from "./RgbColor.ts";
import type {XzCoordinates} from "./XzCoordinates.ts";
import type {XzDimensions} from "./XzDimensions.ts";
export function generateBlocks(dimensions: XzDimensions): readonly Block[] {
	const blocks: Block[] = [];
	for (let gridX = -(dimensions.x - 1) / 2; gridX <= (dimensions.x - 1) / 2; gridX += 1) {
		for (let gridZ = -(dimensions.z - 1) / 2; gridZ <= (dimensions.z - 1) / 2; gridZ += 1) {
			const gridXz: XzCoordinates = {
				x: gridX,
				z: gridZ,
			};
			const y = computeTerrainHeight(gridXz);
			const color: RgbColor = computeBlockColor(y);
			const actualY = Math.max(0, y);
			const gridY = Math.round(actualY);
			blocks.push({
				position: {
					x: gridX,
					y: gridY,
					z: gridZ,
				},
				color,
			} as const satisfies Block);
		}
	}
	return blocks;
}
