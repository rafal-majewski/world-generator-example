import {computeHorizontalOrientationMatrix} from "./computeHorizontalOrientationMatrix.ts";
import {computeNegativeTranslationMatrix} from "./computeNegativeTranslationMatrix.ts";
import {computeOrthographicClippingMatrix} from "./computeOrthographicClippingMatrix.ts";
import {computeOrthographicFieldOfViewMatrix} from "./computeOrthographicFieldOfViewMatrix.ts";
import {computeVerticalOrientationMatrix} from "./computeVerticalOrientationMatrix.ts";
import type {Dimensions} from "./Dimensions.ts";
import {multiplyManyMatrices4} from "./multiplyManyMatrices4.ts";
import type {Orientation} from "./Orientation.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
const farClippingPlane = 100;
export function computeOrthographicProjection(
	position: XyzCoordinates,
	fieldOfView: Dimensions,
	orientation: Orientation,
): Mat4 {
	const fieldOfViewMatrix = computeOrthographicFieldOfViewMatrix(fieldOfView);
	const clippingMatrix = computeOrthographicClippingMatrix(farClippingPlane);
	const translationMatrix = computeNegativeTranslationMatrix(position);
	const horizontalOrientationMatrix = computeHorizontalOrientationMatrix(
		orientation.horizontalRadians,
	);
	const verticalOrientationMatrix = computeVerticalOrientationMatrix(orientation.verticalRadians);
	const combinedMatrix = multiplyManyMatrices4(
		translationMatrix,
		horizontalOrientationMatrix,
		verticalOrientationMatrix,
		clippingMatrix,
		fieldOfViewMatrix,
	);
	return combinedMatrix;
}
