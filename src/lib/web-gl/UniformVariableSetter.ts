import type {VariableSpecification} from "./VariableSpecification.ts";
export class UniformVariableSetter<Datum> {
	private readonly location: WebGLUniformLocation;
	// TODO: Split into with context and without context
	private readonly specification: VariableSpecification<Datum>;
	public set(gl: WebGL2RenderingContext, datum: Datum): undefined {
		this.specification.setUniform(gl, this.location, datum);
	}
	public constructor(specification: VariableSpecification<Datum>, location: WebGLUniformLocation) {
		this.specification = specification;
		this.location = location;
	}
}
