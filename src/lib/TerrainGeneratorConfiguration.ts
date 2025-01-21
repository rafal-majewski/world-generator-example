import type {LayerConfiguration} from "./LayerConfiguration.ts";
export type TerrainGeneratorConfiguration = Readonly<{
	layerConfigurations: readonly LayerConfiguration[];
}>;
