import type {Dimensions} from "./Dimensions.ts";
import type {Drawable} from "./Drawable.ts";
import type {DrawableCreator} from "./DrawableCreator.ts";
export class WebGlWrapper<Scene> {
	private readonly gl: WebGL2RenderingContext;
	private readonly drawables: readonly Drawable<Scene>[];
	public draw(scene: Scene): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		for (const drawable of this.drawables) {
			drawable.draw(this.gl, scene);
		}
	}
	public resize(dimensions: Dimensions): void {
		this.gl.canvas.width = dimensions.width;
		this.gl.canvas.height = dimensions.height;
		this.gl.viewport(0, 0, dimensions.width, dimensions.height);
	}
	private constructor(gl: WebGL2RenderingContext, drawables: readonly Drawable<Scene>[]) {
		this.gl = gl;
		this.drawables = drawables;
	}
	public static create<Scene>(
		gl: WebGL2RenderingContext,
		drawableCreators: readonly DrawableCreator<Scene>[],
	): WebGlWrapper<Scene> {
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LESS);
		const drawables: readonly Drawable<Scene>[] = drawableCreators.map((drawableCreator) => {
			const drawable = drawableCreator.create(gl);
			return drawable;
		});
		const webGlWrapper = new WebGlWrapper(gl, drawables);
		return webGlWrapper;
	}
}
