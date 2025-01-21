import {computePerspectiveClippingMatrix} from "./computePerspectiveClippingMatrix.ts";
import {computePerspectiveFieldOfViewMatrix} from "./computePerspectiveFieldOfViewMatrix.ts";
import {computeHorizontalOrientationMatrix} from "./computeHorizontalOrientationMatrix.ts";
import {computeNegativeTranslationMatrix} from "./computeNegativeTranslationMatrix.ts";
import {computeVerticalOrientationMatrix} from "./computeVerticalOrientationMatrix.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import {multiplyManyMatrices4} from "./multiplyManyMatrices4.ts";
import type {PerspectiveFieldOfView} from "./PerspectiveFieldOfView.ts";
import type {Orientation} from "./Orientation.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
const nearClippingPlane = 0.1;
const farClippingPlane = 300;
export function computePerspectiveProjection(
	position: XyzCoordinates,
	orientationRadians: Orientation,
	fieldOfView: PerspectiveFieldOfView,
): Mat4 {
	const fieldOfViewMatrix = computePerspectiveFieldOfViewMatrix(fieldOfView);
	const clippingMatrix = computePerspectiveClippingMatrix(nearClippingPlane, farClippingPlane);
	const translationMatrix = computeNegativeTranslationMatrix(position);
	const horizontalOrientationMatrix = computeHorizontalOrientationMatrix(
		orientationRadians.horizontal,
	);
	const verticalOrientationMatrix = computeVerticalOrientationMatrix(orientationRadians.vertical);
	const combinedMatrix = multiplyManyMatrices4(
		translationMatrix,
		horizontalOrientationMatrix,
		verticalOrientationMatrix,
		clippingMatrix,
		fieldOfViewMatrix,
	);
	return combinedMatrix;
}
