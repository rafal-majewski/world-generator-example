import {computeRandomNormalizedNumberDeterministically} from "./computeRandomNumberDeterministically.ts";
import {NoiseGenerator} from "./NoiseGenerator.ts";
export const terrainHeightNoiseGenerator = new NoiseGenerator(
	30,
	(normalizedLayerIndex: number) => 1 / (normalizedLayerIndex + 1) ** 20,
	(normalizedLayerIndex: number) => 0.08 + 3 * normalizedLayerIndex,
	(normalizedLayerIndex: number) => {
		const baseX = computeRandomNormalizedNumberDeterministically(normalizedLayerIndex);
		const baseY = computeRandomNormalizedNumberDeterministically(normalizedLayerIndex + 1);
		const base = {
			x: baseX,
			y: baseY,
		};
		return {
			x: 2 * Math.PI * base.x,
			y: 2 * Math.PI * base.y,
		};
	},
	(normalizedLayerIndex: number) => {
		const base = computeRandomNormalizedNumberDeterministically(normalizedLayerIndex + 2);
		return 2 * Math.PI * base;
	},
);
