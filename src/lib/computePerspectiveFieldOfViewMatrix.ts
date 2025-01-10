import type {PerspectiveFieldOfView} from "./FieldOfView.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
export function computePerspectiveFieldOfViewMatrix(fieldOfView: PerspectiveFieldOfView): Mat4 {
	return [
		[1 / Math.tan(fieldOfView.horizontalRadians / 2), 0, 0, 0],
		[0, 1 / Math.tan(fieldOfView.verticalRadians / 2), 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}
