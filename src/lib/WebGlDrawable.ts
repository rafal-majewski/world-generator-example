export interface WebGlDrawable<Scene> {
	draw(gl: WebGL2RenderingContext, scene: Scene): void;
}
