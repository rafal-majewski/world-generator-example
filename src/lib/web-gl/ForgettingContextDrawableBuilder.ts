import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
export interface ForgettingContextDrawableBuilder<Scene, Context> {
	build(gl: WebGL2RenderingContext): ForgettingContextDrawable<Scene, Context>;
}
