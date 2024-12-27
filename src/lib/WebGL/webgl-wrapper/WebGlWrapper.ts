import type {Dimensions} from "../../dimensions/Dimensions.ts";
import type {WebGlWrapperComponent} from "../webgl-wrapper-component/WebGlWrapperComponent.ts";
export class WebGlWrapper<
	Scene,
	WebGlWrapperComponentsToUse extends readonly WebGlWrapperComponent<Scene>[],
> {
	private readonly gl: WebGL2RenderingContext;
	private readonly components: WebGlWrapperComponentsToUse;
	public draw(scene: Scene): void {
		for (const component of this.components) {
			component.draw(this.gl, scene);
		}
	}
	public resize(dimensions: Dimensions): void {
		this.gl.canvas.width = dimensions.width;
		this.gl.canvas.height = dimensions.height;
		this.gl.viewport(0, 0, dimensions.width, dimensions.height);
	}
	public constructor(gl: WebGL2RenderingContext, components: WebGlWrapperComponentsToUse) {
		this.gl = gl;
		this.components = components;
	}
}
