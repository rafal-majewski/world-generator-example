import type {ChangingContextDrawable} from "./ChangingContextDrawable.ts";
export interface ChangingContextDrawableBuilder<Scene, OldContext, NewContext> {
	build(gl: WebGL2RenderingContext): ChangingContextDrawable<Scene, OldContext, NewContext>;
}
