import type {Dimensions} from "./Dimensions.ts";
import type {RgbColor} from "./RgbColor.ts";
import type {VariableName} from "./VariableName.ts";
import {WebGlProgramWrapper} from "./WebGlProgramWrapper.ts";
import type {WebGlProgramWrapperConfiguration} from "./WebGlProgramWrapperConfiguration.ts";
export class WebGlWrapper<Scene> {
	private readonly gl: WebGL2RenderingContext;
	private readonly programWrappers: readonly WebGlProgramWrapper<Scene, unknown, unknown>[];
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
		programWrappers: readonly WebGlProgramWrapper<Scene, unknown, unknown>[],
	) {
		this.gl = gl;
		this.programWrappers = programWrappers;
	}
	public static create<Scene>(
		gl: WebGL2RenderingContext,
		programWrapperConfigurations: readonly WebGlProgramWrapperConfiguration<
			Scene,
			unknown,
			unknown,
			VariableName,
			VariableName,
			VariableName,
			VariableName
		>[],
		backgroundColor: RgbColor,
	): WebGlWrapper<Scene> {
		gl.clearColor(backgroundColor.red, backgroundColor.green, backgroundColor.blue, 1);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LESS);
		const programWrappers = programWrapperConfigurations.map((configuration) => {
			const programWrapper = WebGlProgramWrapper.create(gl, configuration);
			return programWrapper;
		});
		const webGlWrapper = new WebGlWrapper(gl, programWrappers);
		return webGlWrapper;
	}
}
