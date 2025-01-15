import type {ChangingContextDrawable} from "./ChangingContextDrawable.ts";
export interface ChangingContextDrawableCreator<Scene, OldContext, NewContext> {
	create(gl: WebGLRenderingContext): ChangingContextDrawable<Scene, OldContext, NewContext>;
}
