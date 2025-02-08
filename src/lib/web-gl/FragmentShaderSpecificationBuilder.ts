import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithSpecifiedPrecisionFragmentShaderSpecificationBuilder} from "./WithSpecifiedPrecisionFragmentShaderSpecificationBuilder.ts";
export class FragmentShaderSpecificationBuilder<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
> {
	public setPrecision(
		precision: ShaderPrecision,
	): WithSpecifiedPrecisionFragmentShaderSpecificationBuilder<
		UniformsDeclarations,
		VaryingsDeclarations,
		OutputsDeclarations
	> {
		const newBuilder = new WithSpecifiedPrecisionFragmentShaderSpecificationBuilder<
			UniformsDeclarations,
			VaryingsDeclarations,
			OutputsDeclarations
		>(this.uniformsDeclarations, this.varyingsDeclarations, this.outputsDeclarations, precision);
		return newBuilder;
	}
	private readonly uniformsDeclarations: UniformsDeclarations;
	private readonly varyingsDeclarations: VaryingsDeclarations;
	private readonly outputsDeclarations: OutputsDeclarations;
	public constructor(
		uniformsDeclarations: UniformsDeclarations,
		varyingsDeclarations: VaryingsDeclarations,
		outputsDeclarations: OutputsDeclarations,
	) {
		this.uniformsDeclarations = uniformsDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
		this.outputsDeclarations = outputsDeclarations;
	}
}
