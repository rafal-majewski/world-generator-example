import type {MouseState} from "./MouseState.ts";
import type {Orientation} from "./Orientation.ts";
export function computeNewCameraOrientationRadians(
	cameraOrientationRadians: Orientation,
	mouseState: MouseState,
): Orientation {
	const cameraOrientationDeltaRadians: Orientation | null =
		mouseState.leftButtonState === "down"
			? {
					horizontal: mouseState.movementDeltaPixelCount.x * 0.01,
					vertical: -mouseState.movementDeltaPixelCount.y * 0.01,
				}
			: null;
	const newCameraOrientationRadians: Orientation =
		cameraOrientationDeltaRadians === null
			? cameraOrientationRadians
			: {
					horizontal:
						cameraOrientationRadians.horizontal + cameraOrientationDeltaRadians.horizontal,
					vertical: cameraOrientationRadians.vertical + cameraOrientationDeltaRadians.vertical,
				};
	return newCameraOrientationRadians;
}
