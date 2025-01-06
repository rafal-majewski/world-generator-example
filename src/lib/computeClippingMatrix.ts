import type {Matrix4} from "./Matrix4.ts";
export function computeClippingMatrix(
	nearClippingPlane: number,
	farClippingPlane: number,
): Matrix4 {
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
