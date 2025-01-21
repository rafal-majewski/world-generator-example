import type {LayerConfigurationFormState} from "./LayerConfigurationFormState.ts";
export type TerrainGeneratorConfigurationFormState = Readonly<{
	layerConfigurations: readonly LayerConfigurationFormState[];
}>;
