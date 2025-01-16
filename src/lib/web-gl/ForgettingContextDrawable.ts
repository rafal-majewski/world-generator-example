export interface ForgettingContextDrawable<Scene, Context> {
	draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): undefined;
}
