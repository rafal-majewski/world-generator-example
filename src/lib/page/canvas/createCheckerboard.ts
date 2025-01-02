import type {Block} from "./Block.ts";
import type {RgbColor} from "./RgbColor.ts";
import type {XzDimensions} from "./XzDimensions.ts";
export function createCheckerboard(dimensions: XzDimensions): readonly Block[] {
	const blocks: Block[] = [];
	for (let x = -dimensions.x / 2; x < dimensions.x / 2; x += 1) {
		for (let z = -dimensions.z / 2; z < dimensions.z / 2; z += 1) {
			const color: RgbColor = {
				red: (x + z) % 2,
				green: (x + z) % 2,
				blue: (x + z) % 2,
			};
			blocks.push({
				position: {
					x,
					y: 0,
					z,
				},
				color,
			});
		}
	}
	return blocks;
}
