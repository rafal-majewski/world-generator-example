import type {Mat4} from "./Mat4.ts";
export function computeVerticalOrientationMatrix(radians: number): Mat4 {
	return [
		[1, 0, 0, 0],
		[0, Math.cos(radians), Math.sin(radians), 0],
		[0, -Math.sin(radians), Math.cos(radians), 0],
		[0, 0, 0, 1],
	];
}
