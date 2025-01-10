export interface Drawable<Scene> {
	draw(gl: WebGL2RenderingContext, scene: Scene): void;
}
