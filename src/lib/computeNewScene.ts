import type {KeyboardState} from "./KeyboardState.ts";
import {MainWorldChunk} from "./MainWorldChunk.ts";
import type {Orientation} from "./Orientation.ts";
import {PerspectiveCamera} from "./PerspectiveCamera.ts";
import type {Scene} from "./Scene.ts";
import type {XyCoordinates} from "./XyCoordinates.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computeNewScene(
	scene: Scene,
	keyboardState: KeyboardState,
	mousePositionDelta: null | XyCoordinates,
): Scene {
	const desiredForwardMovement =
		(keyboardState.get("KeyW") === "down" ? 1 : 0) - (keyboardState.get("KeyS") === "down" ? 1 : 0);
	const desiredStrafeMovement =
		(keyboardState.get("KeyD") === "down" ? 1 : 0) - (keyboardState.get("KeyA") === "down" ? 1 : 0);
	const cameraPositionForwardDelta: XyzCoordinates = {
		x:
			desiredForwardMovement *
			Math.sin(scene.camera.orientationRadians.horizontal) *
			Math.cos(scene.camera.orientationRadians.vertical),
		y: desiredForwardMovement * Math.sin(scene.camera.orientationRadians.vertical),
		z:
			desiredForwardMovement *
			Math.cos(scene.camera.orientationRadians.vertical) *
			Math.cos(scene.camera.orientationRadians.horizontal),
	};
	const cameraPositionStrafeDelta: XyzCoordinates = {
		x: desiredStrafeMovement * Math.sin(scene.camera.orientationRadians.horizontal + Math.PI / 2),
		y: 0,
		z: desiredStrafeMovement * Math.cos(scene.camera.orientationRadians.horizontal + Math.PI / 2),
	};
	const cameraPositionDelta: XyzCoordinates = {
		x: cameraPositionForwardDelta.x + cameraPositionStrafeDelta.x,
		y: cameraPositionForwardDelta.y + cameraPositionStrafeDelta.y,
		z: cameraPositionForwardDelta.z + cameraPositionStrafeDelta.z,
	};
	const cameraPositionMagnitude: number = Math.sqrt(
		cameraPositionDelta.x ** 2 + cameraPositionDelta.y ** 2 + cameraPositionDelta.z ** 2,
	);
	const sanitizedCameraPositionDelta =
		cameraPositionMagnitude === 0
			? cameraPositionDelta
			: {
					x: cameraPositionDelta.x / cameraPositionMagnitude,
					y: cameraPositionDelta.y / cameraPositionMagnitude,
					z: cameraPositionDelta.z / cameraPositionMagnitude,
				};
	const newCameraPosition: XyzCoordinates = {
		x: scene.camera.position.x + sanitizedCameraPositionDelta.x,
		y: scene.camera.position.y + sanitizedCameraPositionDelta.y,
		z: scene.camera.position.z + sanitizedCameraPositionDelta.z,
	};
	const cameraOrientationDeltaRadians: Orientation | null =
		mousePositionDelta === null
			? null
			: {
					horizontal: mousePositionDelta.x * 0.01,
					vertical: -mousePositionDelta.y * 0.01,
				};
	const newCameraOrientationRadians: Orientation =
		cameraOrientationDeltaRadians === null
			? scene.camera.orientationRadians
			: {
					horizontal:
						scene.camera.orientationRadians.horizontal + cameraOrientationDeltaRadians.horizontal,
					vertical:
						scene.camera.orientationRadians.vertical + cameraOrientationDeltaRadians.vertical,
				};
	const newCamera = PerspectiveCamera.create(
		newCameraPosition,
		newCameraOrientationRadians,
		scene.camera.fieldOfViewRadians,
	);
	// const newMainWorldChunk = MainWorldChunk.create(
	// 	scene.mainWorldChunk.gridChunkSizeInOneDimension,
	// 	newCameraPosition,
	// 	scene.mainWorldChunk.gridChunkCountInOneDimension,
	// 	scene.mainWorldChunk.terrainHeightNoiseGenerator,
	// );
	const newMainWorldChunk = scene.mainWorldChunk.update(newCameraPosition);
	return {
		...scene,
		mainWorldChunk: newMainWorldChunk,
		camera: newCamera,
	};
}
