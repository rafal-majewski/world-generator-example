import type {Matrix4} from "./Matrix4.ts";
import {multiplyMatrix4ByMatrix4} from "./multiplyMatrix4ByMatrix4.ts";
export function multiplyManyMatrices4(...matrices: readonly [Matrix4, ...Matrix4[]]): Matrix4 {
	return matrices.reduce(
		(product: Matrix4, matrix: Matrix4): Matrix4 => multiplyMatrix4ByMatrix4(product, matrix),
	);
}
