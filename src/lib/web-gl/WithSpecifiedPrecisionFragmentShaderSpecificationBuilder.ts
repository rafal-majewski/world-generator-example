import {FragmentShaderMainSpecificationBuilder} from "./FragmentShaderMainSpecificationBuilder.ts";
import type {FragmentShaderMainSpecificationCreator} from "./FragmentShaderMainSpecificationCreator.ts";
import {FragmentShaderSpecification} from "./FragmentShaderSpecification.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
export class WithSpecifiedPrecisionFragmentShaderSpecificationBuilder<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
> {
	public specifyMain(
		creator: FragmentShaderMainSpecificationCreator<
			UniformsDeclarations,
			VaryingsDeclarations,
			OutputsDeclarations,
			Readonly<{}>
		>,
	): FragmentShaderSpecification {
		const builder = new FragmentShaderMainSpecificationBuilder<
			UniformsDeclarations,
			VaryingsDeclarations,
			OutputsDeclarations,
			Readonly<{}>
		>(this.uniformsDeclarations, this.varyingsDeclarations, {});
		const mainSpecification = creator(builder);
		const shaderSpecification = new FragmentShaderSpecification(
			this.precision,
			this.uniformsDeclarations,
			this.varyingsDeclarations,
			this.outputsDeclarations,
			mainSpecification,
		);
		return shaderSpecification;
	}
	public constructor(
		uniformsDeclarations: UniformsDeclarations,
		varyingsDeclarations: VaryingsDeclarations,
		outputsDeclarations: OutputsDeclarations,
		precision: ShaderPrecision,
	) {
		this.uniformsDeclarations = uniformsDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
		this.outputsDeclarations = outputsDeclarations;
		this.precision = precision;
	}
	private readonly uniformsDeclarations: UniformsDeclarations;
	private readonly varyingsDeclarations: VaryingsDeclarations;
	private readonly outputsDeclarations: OutputsDeclarations;
	private readonly precision: ShaderPrecision;
}
