import type {Interactions} from "./Interactions.ts";
import type {NewSceneComputer} from "./NewSceneComputer.ts";
import type {Scene} from "./Scene.ts";
import {World} from "./World.ts";
import type {WorldViewer} from "./WorldViewer.ts";
export class UpdatingWorldNewSceneComputer implements NewSceneComputer {
	public compute(scene: Scene, interactions: Interactions): Scene {
		const viewer = {
			position: scene.camera.position,
			chunkCountInOneDimension: 5,
			minimalDistanceToLowerDetailLevel: 8,
			distanceToLowerDetailLevelExponent: 2,
		} satisfies WorldViewer;
		const newWorld = World.create(81, [viewer], scene.world.terrainHeightNoiseGenerator);
		return {
			...scene,
			world: newWorld,
		};
	}
}
