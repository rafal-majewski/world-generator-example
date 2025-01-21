import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
import {MainWorldChunk} from "./MainWorldChunk.ts";
import {CustomNoiseGenerator} from "./noise/CustomNoiseGenerator.ts";
import {PerspectiveCamera} from "./PerspectiveCamera.ts";
import type {Scene} from "./Scene.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function generateScene(generatorConfiguration: GeneratorConfiguration): Scene {
	const cameraPosition: XyzCoordinates = {
		x: 0,
		y: 3,
		z: 0,
	};
	const camera = PerspectiveCamera.create(
		cameraPosition,
		{
			horizontal: 0,
			vertical: (-Math.PI / 2) * 0.2,
		},
		{
			horizontal: Math.PI / 2,
			vertical: Math.PI / 2,
		},
	);
	const terrainHeightNoiseGenerator = CustomNoiseGenerator.create(
		generatorConfiguration.terrain.layerConfigurations,
	);
	const mainWorldChunk = MainWorldChunk.create(8, cameraPosition, 5, terrainHeightNoiseGenerator);
	return {
		camera,
		mainWorldChunk,
	};
}
