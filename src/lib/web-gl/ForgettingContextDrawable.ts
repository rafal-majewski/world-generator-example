export interface ForgettingContextDrawable<Scene, Context> {
	draw(gl: WebGL2RenderingContext, context: Context, scene: Scene): undefined;
}
