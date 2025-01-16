export interface KeepingContextDrawable<Scene, Context> {
	draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): Context;
}
