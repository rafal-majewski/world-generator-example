import type {Orientation} from "./Orientation.ts";
import type {Mat4} from "./web-gl/Mat4.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export interface Camera {
	position: XyzCoordinates;
	orientationRadians: Orientation;
	projection: Mat4;
}
