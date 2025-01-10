import {computePerspectiveProjection} from "./computePerspectiveProjection.ts";
import type {PerspectiveFieldOfView} from "./FieldOfView.ts";
import type {Orientation} from "./Orientation.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class PerspectiveCamera {
	public readonly position: XyzCoordinates;
	public readonly orientation: Orientation;
	public readonly fieldOfView: PerspectiveFieldOfView;
	public readonly projection: Mat4;
	public constructor(
		position: XyzCoordinates,
		orientation: Orientation,
		fieldOfView: PerspectiveFieldOfView,
	) {
		this.position = position;
		this.orientation = orientation;
		this.fieldOfView = fieldOfView;
		this.projection = computePerspectiveProjection(position, orientation, fieldOfView);
	}
}
