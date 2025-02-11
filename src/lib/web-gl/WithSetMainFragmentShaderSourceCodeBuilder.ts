import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {FragmentShaderSourceCode} from "./FragmentShaderSourceCode.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatements} from "./FinalizedFragmentShaderSourceCodeMainStatements.ts";
export class WithSetMainFragmentShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		outputVariablesDeclarations: OutputVariablesDeclarationsToUse,
		precision: ShaderPrecision,
		body: FinalizedFragmentShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.outputVariablesDeclarations = outputVariablesDeclarations;
		this.precision = precision;
		this.body = body;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly outputVariablesDeclarations: OutputVariablesDeclarationsToUse;
	private readonly precision: ShaderPrecision;
	private readonly body: FinalizedFragmentShaderSourceCodeMainStatements;
	public build(): FragmentShaderSourceCode {
		const shaderSourceCode = new FragmentShaderSourceCode(
			this.precision,
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.outputVariablesDeclarations,
			this.body,
		);
		return shaderSourceCode;
	}
}
