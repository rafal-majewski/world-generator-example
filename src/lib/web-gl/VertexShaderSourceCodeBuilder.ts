import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithSetPrecisionVertexShaderSourceCodeBuilder} from "./WithSetPrecisionVertexShaderSourceCodeBuilder.ts";
export class VertexShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	public setPrecision(
		precision: ShaderPrecision,
	): WithSetPrecisionVertexShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		Readonly<{}>
	> {
		const newSourceCodeBuilder = new WithSetPrecisionVertexShaderSourceCodeBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>
		>(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.varyingVariablesDeclarations,
			precision,
			{},
		);
		return newSourceCodeBuilder;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
	}
}
