import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
import {CustomNoiseGenerator} from "./noise/CustomNoiseGenerator.ts";
import {PerspectiveCamera} from "./PerspectiveCamera.ts";
import type {Scene} from "./Scene.ts";
import {World} from "./World.ts";
import type {WorldViewer} from "./WorldViewer.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function generateScene(generatorConfiguration: GeneratorConfiguration): Scene {
	const cameraPosition: XyzCoordinates = {
		x: 0,
		y: 2,
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
	const viewer = {
		position: cameraPosition,
		chunkCountInOneDimension: 3,
		minimalDistanceToLowerDetailLevel: 5,
		distanceToLowerDetailLevelExponent: 2,
	} satisfies WorldViewer;
	const world = World.create(27, [viewer], terrainHeightNoiseGenerator);
	return {
		camera,
		world,
	};
}
