import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computePositiveTranslationMatrix(position: XyzCoordinates): Mat4 {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[position.x, position.y, position.z, 1],
	];
}
