import {computePerspectiveProjection} from "./computePerspectiveProjection.ts";
import type {PerspectiveFieldOfView} from "./PerspectiveFieldOfView.ts";
import type {Orientation} from "./Orientation.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class PerspectiveCamera {
	public readonly position: XyzCoordinates;
	public readonly orientationRadians: Orientation;
	public readonly fieldOfViewRadians: PerspectiveFieldOfView;
	public readonly projection: Mat4;
	private constructor(
		position: XyzCoordinates,
		orientationRadians: Orientation,
		projection: Mat4,
		fieldOfViewRadians: PerspectiveFieldOfView,
	) {
		this.position = position;
		this.orientationRadians = orientationRadians;
		this.fieldOfViewRadians = fieldOfViewRadians;
		this.projection = projection;
	}
	public static create(
		position: XyzCoordinates,
		orientationRadians: Orientation,
		fieldOfViewRadians: PerspectiveFieldOfView,
	): PerspectiveCamera {
		const projection = computePerspectiveProjection(
			position,
			orientationRadians,
			fieldOfViewRadians,
		);
		const camera = new PerspectiveCamera(
			position,
			orientationRadians,
			projection,
			fieldOfViewRadians,
		);
		return camera;
	}
}
