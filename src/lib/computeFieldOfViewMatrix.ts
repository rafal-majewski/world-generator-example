import type {FieldOfView} from "./FieldOfView.ts";
import type {Mat4} from "./Mat4.ts";
export function computeFieldOfViewMatrix(fieldOfView: FieldOfView): Mat4 {
	return [
		[1.0 / Math.tan(fieldOfView.horizontalRadians / 2), 0, 0, 0],
		[0, 1.0 / Math.tan(fieldOfView.verticalRadians / 2), 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}
