import type {KeepingContextDrawable} from "./KeepingContextDrawable.ts";
export interface KeepingContextDrawableBuilder<Scene, Context> {
	build(gl: WebGL2RenderingContext): KeepingContextDrawable<Scene, Context>;
}
