import type {FinalizedVertexShaderSourceCodeMainStatements} from "./FinalizedVertexShaderSourceCodeMainStatements.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCode} from "./VertexShaderSourceCode.ts";
export class WithSetMainVertexShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		precision: ShaderPrecision,
		body: FinalizedVertexShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.precision = precision;
		this.body = body;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly precision: ShaderPrecision;
	private readonly body: FinalizedVertexShaderSourceCodeMainStatements;
	public build(): VertexShaderSourceCode {
		const sourceCode = new VertexShaderSourceCode(
			this.precision,
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.body,
		);
		return sourceCode;
	}
}
