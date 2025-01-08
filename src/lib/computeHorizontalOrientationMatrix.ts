import type {Mat4} from "./Mat4.ts";
export function computeHorizontalOrientationMatrix(radians: number): Mat4 {
	return [
		[Math.cos(radians), 0, Math.sin(radians), 0],
		[0, 1, 0, 0],
		[-Math.sin(radians), 0, Math.cos(radians), 0],
		[0, 0, 0, 1],
	];
}
