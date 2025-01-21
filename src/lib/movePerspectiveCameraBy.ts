import {PerspectiveCamera} from "./PerspectiveCamera.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function movePerspectiveCameraBy(
	camera: PerspectiveCamera,
	positionDelta: XyzCoordinates,
): PerspectiveCamera {
	const newPosition: XyzCoordinates = {
		x: camera.position.x + positionDelta.x,
		y: camera.position.y + positionDelta.y,
		z: camera.position.z + positionDelta.z,
	};
	const newCamera = PerspectiveCamera.create(
		newPosition,
		camera.orientationRadians,
		camera.fieldOfViewRadians,
	);
	return newCamera;
}
