import type {UniformVariableSpecification} from "./UniformVariableSpecification.ts";
export class UniformVariableSetter<Scene> {
	private readonly location: WebGLUniformLocation;
	private readonly specification: UniformVariableSpecification<Scene>;
	public set(gl: WebGL2RenderingContext, scene: Scene): undefined {
		this.specification.setUniform(gl, this.location, scene);
	}
	public constructor(
		specification: UniformVariableSpecification<Scene>,
		location: WebGLUniformLocation,
	) {
		this.specification = specification;
		this.location = location;
	}
}
