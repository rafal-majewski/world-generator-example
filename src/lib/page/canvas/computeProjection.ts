import type {Camera} from "./Camera.ts";
import {computeClippingMatrix} from "./computeClippingMatrix.ts";
import {computeFieldOfViewMatrix} from "./computeFieldOfViewMatrix.ts";
import {computeHorizontalOrientationMatrix} from "./computeHorizontalOrientationMatrix.ts";
import {computeNegativeTranslationMatrix} from "./computeNegativeTranslationMatrix.ts";
import {computeVerticalOrientationMatrix} from "./computeVerticalOrientationMatrix.ts";
import type {Matrix4} from "./Matrix4.ts";
import {multiplyManyMatrices4} from "./multiplyManyMatrices4.ts";
const nearClippingPlane = 0.1;
const farClippingPlane = 300;
export function computeProjection(camera: Camera): Matrix4 {
	const fieldOfViewMatrix = computeFieldOfViewMatrix(camera.fieldOfView);
	const clippingMatrix = computeClippingMatrix(nearClippingPlane, farClippingPlane);
	const translationMatrix = computeNegativeTranslationMatrix(camera.position);
	const horizontalOrientationMatrix = computeHorizontalOrientationMatrix(
		camera.orientation.horizontalRadians,
	);
	const verticalOrientationMatrix = computeVerticalOrientationMatrix(
		camera.orientation.verticalRadians,
	);
	const combinedMatrix = multiplyManyMatrices4(
		translationMatrix,
		horizontalOrientationMatrix,
		verticalOrientationMatrix,
		clippingMatrix,
		fieldOfViewMatrix,
	);
	return combinedMatrix;
}
