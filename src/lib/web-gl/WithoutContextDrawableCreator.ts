import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export interface WithoutContextDrawableCreator<Scene> {
	create(gl: WebGLRenderingContext): WithoutContextDrawable<Scene>;
}
