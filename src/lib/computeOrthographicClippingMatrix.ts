import type {Mat4} from "./web-gl/Mat4.ts";
export function computeOrthographicClippingMatrix(farClippingPlane: number): Mat4 {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 2 / farClippingPlane, 0],
		[0, 0, -1, 1],
	];
}
