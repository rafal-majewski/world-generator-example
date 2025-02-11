import type {Mat4} from "./Mat4.ts";
import type {UniformVariableSpecification} from "./UniformVariableSpecification.ts";
export class Mat4UniformVariableSpecification<Scene>
	implements UniformVariableSpecification<Scene>
{
	public readonly type = "mat4";
	private readonly extractor: (scene: Scene) => Mat4;
	public constructor(extractor: (scene: Scene) => Mat4) {
		this.extractor = extractor;
	}
	public setUniform(
		gl: WebGL2RenderingContext,
		location: WebGLUniformLocation,
		scene: Scene,
	): undefined {
		const value = this.extractor(scene);
		const flattedValue: readonly number[] = value.flat();
		const rawFlattedValue = new Float32Array(flattedValue);
		gl.uniformMatrix4fv(location, false, rawFlattedValue);
	}
}
