export interface KeepingContextDrawable<Scene, Context> {
	draw(gl: WebGL2RenderingContext, context: Context, scene: Scene): Context;
}
