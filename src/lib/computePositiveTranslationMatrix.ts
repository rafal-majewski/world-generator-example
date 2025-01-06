import type {Matrix4} from "./Matrix4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computePositiveTranslationMatrix(position: XyzCoordinates): Matrix4 {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[position.x, position.y, position.z, 1],
	];
}
