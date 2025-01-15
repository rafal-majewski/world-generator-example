import type {Initializable} from "./Initializable.ts";
export const depthTestInitializable: Initializable = {
	initialize(gl: WebGL2RenderingContext): undefined {
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LESS);
	},
};
