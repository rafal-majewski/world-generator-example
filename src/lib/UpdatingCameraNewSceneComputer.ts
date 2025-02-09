import {computeNewCameraOrientationRadians} from "./computeNewCameraOrientationRadians.ts";
import {computeNewCameraPosition} from "./computeNewCameraPosition.ts";
import type {Interactions} from "./Interactions.ts";
import type {NewSceneComputer} from "./NewSceneComputer.ts";
import {PerspectiveCamera} from "./PerspectiveCamera.ts";
import type {Scene} from "./Scene.ts";
export class UpdatingCameraNewSceneComputer implements NewSceneComputer {
	public compute(scene: Scene, interactions: Interactions): Scene {
		const newCameraPosition = computeNewCameraPosition(
			scene.camera,
			interactions.keyboardState.keyCodesStates,
		);
		const newCameraOrientationRadians = computeNewCameraOrientationRadians(
			scene.camera.orientationRadians,
			interactions.mouseState,
		);
		const newCamera = PerspectiveCamera.create(
			newCameraPosition,
			newCameraOrientationRadians,
			scene.camera.fieldOfViewRadians,
		);
		return {
			...scene,
			camera: newCamera,
		};
	}
}
