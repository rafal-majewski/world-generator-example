import type {Block} from "./Block.ts";
import {NoiseGenerator} from "./page/NoiseGenerator.ts";
import type {RgbColor} from "./RgbColor.ts";
import type {XzCoordinates} from "./page/XzCoordinates.ts";
import type {XzDimensions} from "./XzDimensions.ts";
function computeAmplitudeMultiplier(
	layerCount: number,
	amplitudeComputer: AmplitudeComputer,
): number {
	let amplitudeMultiplier = 0;
	for (let layerIndex = 0; layerIndex < layerCount; layerIndex += 1) {
		amplitudeMultiplier += amplitudeComputer(layerIndex / layerCount);
	}
	return 1 / amplitudeMultiplier;
}

function computeRandomNumber(x: number): number {
	const seed = Math.PI ** 10 * Math.sin(x);
	const flooredSeed = Math.floor(seed);
	return seed - flooredSeed;
}
const noiseGenerator = new NoiseGenerator(
	30,
	(normalizedLayerIndex) => 1 / (normalizedLayerIndex + 1) ** 20,
	(normalizedLayerIndex) => 0.08 + 3 * normalizedLayerIndex,
	(normalizedLayerIndex) => {
		const baseX = computeRandomNumber(normalizedLayerIndex);
		const baseY = computeRandomNumber(normalizedLayerIndex + 1);
		const base = {
			x: baseX,
			y: baseY,
		};
		return {
			x: 2 * Math.PI * base.x,
			y: 2 * Math.PI * base.y,
		};
	},
	(normalizedLayerIndex) => {
		const base = computeRandomNumber(normalizedLayerIndex + 2);
		return 2 * Math.PI * base;
	},
);
function computeHeight(position: XzCoordinates): number {
	return (
		noiseGenerator.compute({
			x: position.x,
			y: position.z,
		}) * 5
	);
}
function computeBlockColor(originalHeight: number): RgbColor {
	if (originalHeight < 0) {
		return {
			red: 0,
			green: 0,
			blue: 1 / (-0.3 * originalHeight + 1),
		};
	}
	if (originalHeight < 1) {
		return {
			red: 1 - originalHeight / 2,
			green: 1 - (originalHeight * 3) / 4,
			blue: 0,
		};
	}
	return {
		red: 1 / 2,
		green: 1 / 4,
		blue: 0,
	};
}
export function generateBlocks(dimensions: XzDimensions): readonly Block[] {
	const blocks: Block[] = [];
	for (let gridX = -(dimensions.x - 1) / 2; gridX <= (dimensions.x - 1) / 2; gridX += 1) {
		for (let gridZ = -(dimensions.z - 1) / 2; gridZ <= (dimensions.z - 1) / 2; gridZ += 1) {
			const gridXz: XzCoordinates = {
				x: gridX,
				z: gridZ,
			};
			const y = computeHeight(gridXz);
			const leftNearXz: XzCoordinates = {
				x: gridX - 0.5,
				z: gridZ - 0.5,
			};
			const leftNearY = computeHeight(leftNearXz);
			const rightNearXz: XzCoordinates = {
				x: gridX + 0.5,
				z: gridZ - 0.5,
			};
			const rightNearY = computeHeight(rightNearXz);
			const rightFarXz: XzCoordinates = {
				x: gridX + 0.5,
				z: gridZ + 0.5,
			};
			const rightFarY = computeHeight(rightFarXz);
			const leftFarXz: XzCoordinates = {
				x: gridX - 0.5,
				z: gridZ + 0.5,
			};
			const leftFarY = computeHeight(leftFarXz);
			const color = computeBlockColor(y);
			const actualY = Math.max(0, y);
			const gridY = Math.round(actualY);
			blocks.push({
				position: {
					x: gridX,
					y: gridY,
					z: gridZ,
				},
				color,
			});

			// if (y < 0) {
			// 	const color: RgbColor = {
			// 		red: Math.random() * 0.1,
			// 		green: Math.random() * 0.1,
			// 		blue: 1 - Math.random() * 0.1,
			// 	};
			// 	blocks.push({
			// 		position: {
			// 			x,
			// 			y: 0,
			// 			z,
			// 		},
			// 		color,
			// 	});
			// } else {
			// 	const color: RgbColor = {
			// 		red: Math.random() * 0.2,
			// 		green: 1 - Math.random() * 0.2,
			// 		blue: Math.random() * 0.2,
			// 	};
			// 	blocks.push({
			// 		position: {
			// 			x,
			// 			y,
			// 			z,
			// 		},
			// 		color,
			// 	});
			// }

			// const color: RgbColor = (y < 0) ? {
			// 	red: 0,
			// 	green: 0,
			// blocks.push({
			// 	position: {
			// 		x,
			// 		y: Math.sin(x / 2) + Math.cos(z / 2),
			// 		z,
			// 	},
			// 	color,
			// });
		}
	}
	return blocks;
}
