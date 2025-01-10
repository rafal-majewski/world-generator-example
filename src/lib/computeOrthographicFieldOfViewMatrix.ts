import type {Dimensions} from "./Dimensions.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
export function computeOrthographicFieldOfViewMatrix(fieldOfView: Dimensions): Mat4 {
	return [
		[2 / fieldOfView.width, 0, 0, 0],
		[0, 2 / fieldOfView.height, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}
