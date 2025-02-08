import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithSpecifiedPrecisionVertexShaderSpecificationBuilder} from "./WithSpecifiedPrecisionVertexShaderSpecificationBuilder.ts";
export class VertexShaderSpecificationBuilder<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
> {
	public setPrecision(
		precision: ShaderPrecision,
	): WithSpecifiedPrecisionVertexShaderSpecificationBuilder<
		UniformsDeclarations,
		AttributesDeclarations,
		VaryingsDeclarations
	> {
		const newBuilder = new WithSpecifiedPrecisionVertexShaderSpecificationBuilder<
			UniformsDeclarations,
			AttributesDeclarations,
			VaryingsDeclarations
		>(this.uniformsDeclarations, this.attributesDeclarations, this.varyingsDeclarations, precision);
		return newBuilder;
	}
	private readonly uniformsDeclarations: UniformsDeclarations;
	private readonly attributesDeclarations: AttributesDeclarations;
	private readonly varyingsDeclarations: VaryingsDeclarations;
	public constructor(
		uniformsDeclarations: UniformsDeclarations,
		attributesDeclarations: AttributesDeclarations,
		varyingsDeclarations: VaryingsDeclarations,
	) {
		this.uniformsDeclarations = uniformsDeclarations;
		this.attributesDeclarations = attributesDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
	}
}
