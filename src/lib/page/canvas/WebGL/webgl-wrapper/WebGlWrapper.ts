import type {Dimensions} from "../../../dimensions/Dimensions.ts";
import type {RgbColor} from "../../RgbColor.ts";
import type {WebGlProgramWrapper} from "../program-wrapper/WebGlProgramWrapper.ts";
export class WebGlWrapper<Scene, Triangle, Vertex> {
	private readonly gl: WebGL2RenderingContext;
	private readonly programWrappers: readonly WebGlProgramWrapper<Scene, Triangle, Vertex>[];
	public draw(scene: Scene): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		for (const programWrapper of this.programWrappers) {
			programWrapper.draw(this.gl, scene);
		}
	}
	public resize(dimensions: Dimensions): void {
		this.gl.canvas.width = dimensions.width;
		this.gl.canvas.height = dimensions.height;
		this.gl.viewport(0, 0, dimensions.width, dimensions.height);
	}
	private constructor(
		gl: WebGL2RenderingContext,
		programWrappers: readonly WebGlProgramWrapper<Scene, Triangle, Vertex>[],
	) {
		this.gl = gl;
		this.programWrappers = programWrappers;
	}
	public static create<Scene, Triangle, Vertex>(
		gl: WebGL2RenderingContext,
		programWrappers: readonly WebGlProgramWrapper<Scene, Triangle, Vertex>[],
		backgroundColor: RgbColor,
	): WebGlWrapper<Scene, Triangle, Vertex> {
		gl.clearColor(backgroundColor.red, backgroundColor.green, backgroundColor.blue, 1);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LESS);
		const webGlWrapper = new WebGlWrapper(gl, programWrappers);
		return webGlWrapper;
	}
}
