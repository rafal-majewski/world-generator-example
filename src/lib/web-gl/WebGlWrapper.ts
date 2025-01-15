import type {Dimensions} from "./Dimensions.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class WebGlWrapper<Scene> {
	private readonly gl: WebGL2RenderingContext;
	private readonly drawable: WithoutContextDrawable<Scene>;
	public draw(scene: Scene): undefined {
		this.drawable.draw(this.gl, scene);
	}
	public resize(dimensions: Dimensions): undefined {
		this.gl.canvas.width = dimensions.width;
		this.gl.canvas.height = dimensions.height;
		this.gl.viewport(0, 0, dimensions.width, dimensions.height);
	}
	public constructor(gl: WebGL2RenderingContext, drawable: WithoutContextDrawable<Scene>) {
		this.gl = gl;
		this.drawable = drawable;
	}
}
