import type {LayerConfiguration} from "./LayerConfiguration.ts";
import type {TerrainGeneratorConfiguration} from "./TerrainGeneratorConfiguration.ts";
import type {TerrainGeneratorConfigurationFormState} from "./TerrainGeneratorConfigurationFormState.ts";
export function computeTerrainGeneratorConfigurationFromTerrainGeneratorConfigurationFormState(
	formState: TerrainGeneratorConfigurationFormState,
): TerrainGeneratorConfiguration {
	const layerConfigurations: readonly LayerConfiguration[] = formState.layerConfigurations.reduce<
		LayerConfiguration[]
	>((accumulatedLayerConfigurations, layerConfigurationFormState) => {
		if (
			layerConfigurationFormState.amplitude !== null &&
			layerConfigurationFormState.frequency !== null &&
			layerConfigurationFormState.shiftRadians.x !== null &&
			layerConfigurationFormState.shiftRadians.y !== null &&
			layerConfigurationFormState.angleRadians !== null
		) {
			accumulatedLayerConfigurations.push({
				amplitude: layerConfigurationFormState.amplitude,
				frequency: layerConfigurationFormState.frequency,
				shiftRadians: {
					x: layerConfigurationFormState.shiftRadians.x,
					y: layerConfigurationFormState.shiftRadians.y,
				},
				angleRadians: layerConfigurationFormState.angleRadians,
			} satisfies LayerConfiguration);
		}
		return accumulatedLayerConfigurations;
	}, []);
	return {
		layerConfigurations,
	};
}
