import type {WebGlDrawable} from "./WebGlDrawable.ts";
export interface WebGlDrawableCreator<Scene> {
	create(gl: WebGLRenderingContext): WebGlDrawable<Scene>;
}
