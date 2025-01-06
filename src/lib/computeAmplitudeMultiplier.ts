export function computeAmplitudeMultiplier(
	layerCount: number,
	amplitudeComputer: AmplitudeComputer,
): number {
	let amplitudeMultiplier = 0;
	for (let layerIndex = 0; layerIndex < layerCount; layerIndex += 1) {
		amplitudeMultiplier += amplitudeComputer(layerIndex / layerCount);
	}
	return 1 / amplitudeMultiplier;
}
