import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
import {World} from "./World.ts";
import {CustomNoiseGenerator} from "./noise/CustomNoiseGenerator.ts";
import type {Scene} from "./Scene.ts";
export function applyGeneratorConfigurationToScene(
	scene: Scene,
	generatorConfiguration: GeneratorConfiguration,
): Scene {
	const newTerrainHeightNoiseGenerator = CustomNoiseGenerator.create(
		generatorConfiguration.terrain.layerConfigurations,
	);
	const newWorld = World.create(
		scene.world.chunkSizeInOneDimension,
		scene.world.viewers,
		newTerrainHeightNoiseGenerator,
		// scene.camera.position,
		// scene.world.gridChunkCountInOneDimension,
		// newTerrainHeightNoiseGenerator,
		// scene.world.minimalDistanceToLowerDetailLevel,
		// scene.world.distanceToLowerDetailLevelExponent,
	);
	return {
		...scene,
		world: newWorld,
	};
}
