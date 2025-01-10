import {computeOrthographicProjection} from "./computeOrthographicProjection.ts";
import type {Dimensions} from "./Dimensions.ts";
import type {Orientation} from "./Orientation.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class OrthographicCamera {
	public readonly position: XyzCoordinates;
	public readonly fieldOfView: Dimensions;
	public readonly orientation: Orientation;
	public readonly projection: Mat4;
	public constructor(position: XyzCoordinates, orientation: Orientation, fieldOfView: Dimensions) {
		this.position = position;
		this.fieldOfView = fieldOfView;
		this.orientation = orientation;
		this.projection = computeOrthographicProjection(position, fieldOfView, orientation);
	}
}
