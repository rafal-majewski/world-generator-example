import type {Drawable} from "./Drawable.ts";
export interface DrawableCreator<Scene> {
	create(gl: WebGLRenderingContext): Drawable<Scene>;
}
