import type {Camera} from "./Camera.ts";
import {computeOrthographicProjection} from "./computeOrthographicProjection.ts";
import type {Dimensions} from "./Dimensions.ts";
import type {Orientation} from "./Orientation.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class OrthographicCamera implements Camera {
	public readonly position: XyzCoordinates;
	public readonly fieldOfView: Dimensions;
	public readonly orientationRadians: Orientation;
	public readonly projection: Mat4;
	public constructor(
		position: XyzCoordinates,
		orientationRadians: Orientation,
		fieldOfView: Dimensions,
	) {
		this.position = position;
		this.fieldOfView = fieldOfView;
		this.orientationRadians = orientationRadians;
		this.projection = computeOrthographicProjection(position, fieldOfView, orientationRadians);
	}
}
