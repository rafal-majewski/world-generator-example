import type {Matrix4} from "./Matrix4.ts";
export function multiplyMatrix4ByMatrix4(matrix1: Matrix4, matrix2: Matrix4): Matrix4 {
	return [
		[
			matrix1[0][0] * matrix2[0][0] +
				matrix1[0][1] * matrix2[1][0] +
				matrix1[0][2] * matrix2[2][0] +
				matrix1[0][3] * matrix2[3][0],
			matrix1[0][0] * matrix2[0][1] +
				matrix1[0][1] * matrix2[1][1] +
				matrix1[0][2] * matrix2[2][1] +
				matrix1[0][3] * matrix2[3][1],
			matrix1[0][0] * matrix2[0][2] +
				matrix1[0][1] * matrix2[1][2] +
				matrix1[0][2] * matrix2[2][2] +
				matrix1[0][3] * matrix2[3][2],
			matrix1[0][0] * matrix2[0][3] +
				matrix1[0][1] * matrix2[1][3] +
				matrix1[0][2] * matrix2[2][3] +
				matrix1[0][3] * matrix2[3][3],
		],
		[
			matrix1[1][0] * matrix2[0][0] +
				matrix1[1][1] * matrix2[1][0] +
				matrix1[1][2] * matrix2[2][0] +
				matrix1[1][3] * matrix2[3][0],
			matrix1[1][0] * matrix2[0][1] +
				matrix1[1][1] * matrix2[1][1] +
				matrix1[1][2] * matrix2[2][1] +
				matrix1[1][3] * matrix2[3][1],
			matrix1[1][0] * matrix2[0][2] +
				matrix1[1][1] * matrix2[1][2] +
				matrix1[1][2] * matrix2[2][2] +
				matrix1[1][3] * matrix2[3][2],
			matrix1[1][0] * matrix2[0][3] +
				matrix1[1][1] * matrix2[1][3] +
				matrix1[1][2] * matrix2[2][3] +
				matrix1[1][3] * matrix2[3][3],
		],
		[
			matrix1[2][0] * matrix2[0][0] +
				matrix1[2][1] * matrix2[1][0] +
				matrix1[2][2] * matrix2[2][0] +
				matrix1[2][3] * matrix2[3][0],
			matrix1[2][0] * matrix2[0][1] +
				matrix1[2][1] * matrix2[1][1] +
				matrix1[2][2] * matrix2[2][1] +
				matrix1[2][3] * matrix2[3][1],
			matrix1[2][0] * matrix2[0][2] +
				matrix1[2][1] * matrix2[1][2] +
				matrix1[2][2] * matrix2[2][2] +
				matrix1[2][3] * matrix2[3][2],
			matrix1[2][0] * matrix2[0][3] +
				matrix1[2][1] * matrix2[1][3] +
				matrix1[2][2] * matrix2[2][3] +
				matrix1[2][3] * matrix2[3][3],
		],
		[
			matrix1[3][0] * matrix2[0][0] +
				matrix1[3][1] * matrix2[1][0] +
				matrix1[3][2] * matrix2[2][0] +
				matrix1[3][3] * matrix2[3][0],
			matrix1[3][0] * matrix2[0][1] +
				matrix1[3][1] * matrix2[1][1] +
				matrix1[3][2] * matrix2[2][1] +
				matrix1[3][3] * matrix2[3][1],
			matrix1[3][0] * matrix2[0][2] +
				matrix1[3][1] * matrix2[1][2] +
				matrix1[3][2] * matrix2[2][2] +
				matrix1[3][3] * matrix2[3][2],
			matrix1[3][0] * matrix2[0][3] +
				matrix1[3][1] * matrix2[1][3] +
				matrix1[3][2] * matrix2[2][3] +
				matrix1[3][3] * matrix2[3][3],
		],
	];
}
