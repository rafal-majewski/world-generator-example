import type {Camera} from "./Camera.ts";
import type {KeyCodesState} from "./KeyCodesState.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computeNewCameraPosition(
	camera: Camera,
	keyCodesStates: KeyCodesState,
): XyzCoordinates {
	const desiredForwardMovement =
		(keyCodesStates.get("KeyW") === "down" ? 1 : 0) -
		(keyCodesStates.get("KeyS") === "down" ? 1 : 0);
	const desiredStrafeMovement =
		(keyCodesStates.get("KeyD") === "down" ? 1 : 0) -
		(keyCodesStates.get("KeyA") === "down" ? 1 : 0);
	const cameraPositionForwardDelta: XyzCoordinates = {
		x:
			desiredForwardMovement *
			Math.sin(camera.orientationRadians.horizontal) *
			Math.cos(camera.orientationRadians.vertical),
		y: desiredForwardMovement * Math.sin(camera.orientationRadians.vertical),
		z:
			desiredForwardMovement *
			Math.cos(camera.orientationRadians.vertical) *
			Math.cos(camera.orientationRadians.horizontal),
	};
	const cameraPositionStrafeDelta: XyzCoordinates = {
		x: desiredStrafeMovement * Math.sin(camera.orientationRadians.horizontal + Math.PI / 2),
		y: 0,
		z: desiredStrafeMovement * Math.cos(camera.orientationRadians.horizontal + Math.PI / 2),
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
	return {
		x: camera.position.x + sanitizedCameraPositionDelta.x,
		y: camera.position.y + sanitizedCameraPositionDelta.y,
		z: camera.position.z + sanitizedCameraPositionDelta.z,
	};
}
