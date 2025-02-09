import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderMainSpecificationBuilder} from "./VertexShaderMainSpecificationBuilder.ts";
import type {VertexShaderMainSpecificationCreator} from "./VertexShaderMainSpecificationCreator.ts";
import {VertexShaderSpecification} from "./VertexShaderSpecification.ts";
export class WithSpecifiedPrecisionVertexShaderSpecificationBuilder<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
> {
	public constructor(
		uniformsDeclarations: UniformsDeclarations,
		attributesDeclarations: AttributesDeclarations,
		varyingsDeclarations: VaryingsDeclarations,
		precision: ShaderPrecision,
	) {
		this.uniformsDeclarations = uniformsDeclarations;
		this.attributesDeclarations = attributesDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
		this.precision = precision;
	}
	private readonly uniformsDeclarations: UniformsDeclarations;
	private readonly attributesDeclarations: AttributesDeclarations;
	private readonly varyingsDeclarations: VaryingsDeclarations;
	private readonly precision: ShaderPrecision;
	public specifyMain(
		creator: VertexShaderMainSpecificationCreator<
			UniformsDeclarations,
			AttributesDeclarations,
			VaryingsDeclarations,
			Readonly<{}>,
			Readonly<{}>
		>,
	): VertexShaderSpecification {
		const builder = new VertexShaderMainSpecificationBuilder<
			UniformsDeclarations,
			AttributesDeclarations,
			VaryingsDeclarations,
			Readonly<{}>,
			Readonly<{}>
		>(this.uniformsDeclarations, this.attributesDeclarations, {}, {});
		const mainSpecification = creator(builder).build();
		const shaderSpecification = new VertexShaderSpecification(
			this.precision,
			this.uniformsDeclarations,
			this.attributesDeclarations,
			this.varyingsDeclarations,
			mainSpecification,
		);
		return shaderSpecification;
	}
}
