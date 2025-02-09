import type {MouseButtonState} from "./MouseButtonState.ts";
import type {XyCoordinates} from "./XyCoordinates.ts";
export type MouseState = Readonly<{
	movementDeltaPixelCount: XyCoordinates;
	leftButtonState: MouseButtonState;
}>;
