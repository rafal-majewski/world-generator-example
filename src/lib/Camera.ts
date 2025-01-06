import type {FieldOfView} from "./FieldOfView.ts";
import type {Orientation} from "./Orientation.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export type Camera = Readonly<{
	position: XyzCoordinates;
	orientation: Orientation;
	fieldOfView: FieldOfView;
}>;
