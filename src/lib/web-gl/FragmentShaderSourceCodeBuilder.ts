import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithSetPrecisionFragmentShaderSourceCodeBuilder} from "./WithSetPrecisionFragmentShaderSourceCodeBuilder.ts";
export class FragmentShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	public setPrecision(
		precision: ShaderPrecision,
	): WithSetPrecisionFragmentShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse
	> {
		const newSourceCodeBuilder = new WithSetPrecisionFragmentShaderSourceCodeBuilder<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse
		>(
			this.uniformVariablesDeclarations,
			this.outputVariablesDeclarations,
			this.varyingVariablesDeclarations,
			precision,
		);
		return newSourceCodeBuilder;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly outputVariablesDeclarations: OutputVariablesDeclarationsToUse;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		outputVariablesDeclarations: OutputVariablesDeclarationsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.outputVariablesDeclarations = outputVariablesDeclarations;
	}
}
