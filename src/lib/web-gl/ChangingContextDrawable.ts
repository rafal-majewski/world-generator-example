export interface ChangingContextDrawable<Scene, OldContext, NewContext> {
	draw(gl: WebGL2RenderingContext, context: OldContext, scene: Scene): NewContext;
}
