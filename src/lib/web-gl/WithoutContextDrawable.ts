export interface WithoutContextDrawable<Scene> {
	draw(gl: WebGL2RenderingContext, scene: Scene): void;
}
