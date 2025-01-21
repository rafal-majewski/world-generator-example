import type {Mat4} from "./web-gl/Mat4.ts";
export function computePerspectiveClippingMatrix(
	nearClippingPlane: number,
	farClippingPlane: number,
): Mat4 {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, (farClippingPlane + nearClippingPlane) / (farClippingPlane - nearClippingPlane), 1],
		[
			0,
			0,
			(-2 * (farClippingPlane * nearClippingPlane)) / (farClippingPlane - nearClippingPlane),
			0,
		],
	];
}