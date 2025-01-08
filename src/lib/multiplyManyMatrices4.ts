import type {Mat4} from "./Mat4.ts";
import {multiplyMat4ByMat4} from "./multiplyMat4ByMat4.ts";
export function multiplyManyMatrices4(...matrices: readonly [Mat4, ...Mat4[]]): Mat4 {
	return matrices.reduce(
		(product: Mat4, matrix: Mat4): Mat4 => multiplyMat4ByMat4(product, matrix),
	);
}
