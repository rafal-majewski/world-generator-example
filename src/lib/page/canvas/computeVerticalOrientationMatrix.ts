import type {Matrix4} from "./Matrix4.ts";
export function computeVerticalOrientationMatrix(radians: number): Matrix4 {
	return [
		[1, 0, 0, 0],
		[0, Math.cos(radians), Math.sin(radians), 0],
		[0, -Math.sin(radians), Math.cos(radians), 0],
		[0, 0, 0, 1],
	];
}
