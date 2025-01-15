import type {CreatingContextDrawable} from "./CreatingContextDrawable.ts";
export interface CreatingContextDrawableCreator<Scene, Context> {
	create(gl: WebGLRenderingContext): CreatingContextDrawable<Scene, Context>;
}
