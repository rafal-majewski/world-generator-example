import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export interface WithoutContextDrawableBuilder<Scene> {
	build(gl: WebGL2RenderingContext): WithoutContextDrawable<Scene>;
}
