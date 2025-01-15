import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
export interface ForgettingContextDrawableCreator<Scene, Context> {
	create(gl: WebGL2RenderingContext): ForgettingContextDrawable<Scene, Context>;
}
