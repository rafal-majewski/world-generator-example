import type {KeepingContextDrawable} from "./KeepingContextDrawable.ts";
export interface KeepingContextDrawableCreator<Scene, Context> {
	create(gl: WebGLRenderingContext): KeepingContextDrawable<Scene, Context>;
}
