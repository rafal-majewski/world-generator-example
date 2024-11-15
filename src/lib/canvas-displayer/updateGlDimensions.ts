import type {Dimensions} from "../Dimensions.ts";
import type {OnscreenWebGL2RenderingContext} from "./OnscreenWebGL2RenderingContext.ts";

export function updateGlDimensions(
	gl: OnscreenWebGL2RenderingContext,
	dimensions: Dimensions,
): void {
	gl.canvas.width = dimensions.width;
	gl.canvas.height = dimensions.height;
	gl.viewport(0, 0, dimensions.width, dimensions.height);
}
