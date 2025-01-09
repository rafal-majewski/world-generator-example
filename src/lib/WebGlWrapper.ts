import type {Dimensions} from "./Dimensions.ts";
import type {RgbColor} from "./RgbColor.ts";
import {type WebGlDrawable} from "./WebGlDrawable.ts";
import type {WebGlDrawableCreator} from "./WebGlDrawableCreator.ts";
export class WebGlWrapper<Scene> {
	private readonly gl: WebGL2RenderingContext;
	private readonly drawables: readonly WebGlDrawable<Scene>[];
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
	private constructor(gl: WebGL2RenderingContext, drawables: readonly WebGlDrawable<Scene>[]) {
		this.gl = gl;
		this.drawables = drawables;
	}
	public static create<Scene>(
		gl: WebGL2RenderingContext,
		drawableCreators: readonly WebGlDrawableCreator<Scene>[],
		backgroundColor: RgbColor,
	): WebGlWrapper<Scene> {
		gl.clearColor(backgroundColor.red, backgroundColor.green, backgroundColor.blue, 1);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LESS);
		const drawables: readonly WebGlDrawable<Scene>[] = drawableCreators.map((drawableCreator) => {
			const drawable = drawableCreator.create(gl);
			return drawable;
		});
		const webGlWrapper = new WebGlWrapper(gl, drawables);
		return webGlWrapper;
	}
}
