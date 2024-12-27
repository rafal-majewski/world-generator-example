export interface WebGlWrapperComponent<Scene> {
	draw(gl: WebGL2RenderingContext, scene: Scene): void;
}
