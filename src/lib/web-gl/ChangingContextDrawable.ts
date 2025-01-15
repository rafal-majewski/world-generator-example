export interface ChangingContextDrawable<Scene, OldContext, NewContext> {
	draw(gl: WebGL2RenderingContext, scene: Scene, context: OldContext): NewContext;
}
