import type {LayerConfiguration} from "$lib/LayerConfiguration.ts";
// export function computeAmplitudeMultiplier(
// 	layerCount: number,
// 	amplitudeComputer: NoiseGeneratorLayerNumberComputer,
// ): number {
// 	let amplitudeMultiplier = 0;
// 	for (let layerIndex = 0; layerIndex < layerCount; layerIndex += 1) {
// 		amplitudeMultiplier += amplitudeComputer(layerIndex / layerCount);
// 	}
// 	return 1 / amplitudeMultiplier;
// }
export function computeAmplitudeMultiplierFromLayerConfigurations(
	configurations: readonly LayerConfiguration[],
): number {
	let amplitudeMultiplier = 0;
	// 	for (let layerIndex = 0; layerIndex < layerCount; layerIndex += 1) {
	// 		amplitudeMultiplier += amplitudeComputer(layerIndex / layerCount);
	// 	}
	// 	return 1 / amplitudeMultiplier;
	// }
	for (const configuration of configurations) {
		amplitudeMultiplier += configuration.amplitude;
	}
	return 1 / amplitudeMultiplier;
}
