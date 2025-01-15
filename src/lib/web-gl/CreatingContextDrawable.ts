export interface CreatingContextDrawable<Scene, Context> {
	draw(gl: WebGL2RenderingContext, scene: Scene): Context;
}
