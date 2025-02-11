import type {CreatingContextDrawable} from "./CreatingContextDrawable.ts";
export interface CreatingContextDrawableBuilder<Scene, Context> {
	build(gl: WebGL2RenderingContext): CreatingContextDrawable<Scene, Context>;
}
