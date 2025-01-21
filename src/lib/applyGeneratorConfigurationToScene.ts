import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
import {MainWorldChunk} from "./MainWorldChunk.ts";
import {CustomNoiseGenerator} from "./noise/CustomNoiseGenerator.ts";
import type {Scene} from "./Scene.ts";
export function applyGeneratorConfigurationToScene(
	scene: Scene,
	generatorConfiguration: GeneratorConfiguration,
): Scene {
	const newTerrainHeightNoiseGenerator = CustomNoiseGenerator.create(
		generatorConfiguration.terrain.layerConfigurations,
	);
	const newMainWorldChunk = MainWorldChunk.create(
		scene.mainWorldChunk.gridChunkSizeInOneDimension,
		scene.camera.position,
		scene.mainWorldChunk.gridChunkCountInOneDimension,
		newTerrainHeightNoiseGenerator,
	);
	return {
		...scene,
		mainWorldChunk: newMainWorldChunk,
	};
}
