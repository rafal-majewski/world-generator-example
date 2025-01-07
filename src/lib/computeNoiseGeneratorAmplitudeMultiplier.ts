import type {NoiseGeneratorLayerNumberComputer} from "./NoiseGeneratorLayerNumberComputer.ts";

export function computeNoiseGeneratorAmplitudeMultiplier(
	layerCount: number,
	amplitudeComputer: NoiseGeneratorLayerNumberComputer,
): number {
	let amplitudeMultiplier = 0;
	for (let layerIndex = 0; layerIndex < layerCount; layerIndex += 1) {
		amplitudeMultiplier += amplitudeComputer(layerIndex / layerCount);
	}
	return 1 / amplitudeMultiplier;
}
