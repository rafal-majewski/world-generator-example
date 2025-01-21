import type {PerspectiveFieldOfView} from "./PerspectiveFieldOfView.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
export function computePerspectiveFieldOfViewMatrix(
	fieldOfViewRadians: PerspectiveFieldOfView,
): Mat4 {
	return [
		[1 / Math.tan(fieldOfViewRadians.horizontal / 2), 0, 0, 0],
		[0, 1 / Math.tan(fieldOfViewRadians.vertical / 2), 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}
