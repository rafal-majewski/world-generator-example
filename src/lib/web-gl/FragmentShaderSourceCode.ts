import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatements} from "./FinalizedFragmentShaderSourceCodeMainStatements.ts";
export class FragmentShaderSourceCode {
	public constructor(
		precision: ShaderPrecision,
		uniformVariablesDeclarations: VariablesDeclarations,
		varyingVariablesDeclarations: VariablesDeclarations,
		outputVariablesDeclarations: VariablesDeclarations,
		body: FinalizedFragmentShaderSourceCodeMainStatements,
	) {
		this.precision = precision;
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.outputVariablesDeclarations = outputVariablesDeclarations;
		this.body = body;
	}
	public readonly precision: ShaderPrecision;
	private readonly uniformVariablesDeclarations: VariablesDeclarations;
	private readonly varyingVariablesDeclarations: VariablesDeclarations;
	private readonly outputVariablesDeclarations: VariablesDeclarations;
	public readonly body: FinalizedFragmentShaderSourceCodeMainStatements;
	public override stringify(): string {
		const versionSection = "#version 300 es";
		const precisionSection = `precision ${this.precision}p float;`;
		const uniformsSection = Object.entries(this.uniformVariablesDeclarations)
			.map(([name, type]) => `uniform ${type} u_${name};`)
			.join("\n");
		const varyingsSection = Object.entries(this.varyingVariablesDeclarations)
			.map(([name, type]) => `in ${type} v_${name};`)
			.join("\n");
		const outputsSection = Object.entries(this.outputVariablesDeclarations)
			.map(([name, type]) => `out ${type} o_${name};`)
			.join("\n");
		const mainSection = `void main() {
${this.body.stringify(1)}
}`;
		return `${versionSection}
${precisionSection}
${uniformsSection}
${varyingsSection}
${outputsSection}
${mainSection}`;
	}
}
