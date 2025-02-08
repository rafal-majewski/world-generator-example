import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderMainSpecification} from "./FragmentShaderMainSpecification.ts";
export class FragmentShaderSpecification {
	public constructor(
		precision: ShaderPrecision,
		uniformsDeclarations: VariablesDeclarations,
		varyingsDeclarations: VariablesDeclarations,
		outputsDeclarations: VariablesDeclarations,
		mainSpecification: FragmentShaderMainSpecification,
	) {
		this.precision = precision;
		this.uniformsDeclarations = uniformsDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
		this.outputsDeclarations = outputsDeclarations;
		this.mainSpecification = mainSpecification;
	}
	public readonly precision: ShaderPrecision;
	private readonly uniformsDeclarations: VariablesDeclarations;
	private readonly varyingsDeclarations: VariablesDeclarations;
	private readonly outputsDeclarations: VariablesDeclarations;
	public readonly mainSpecification: FragmentShaderMainSpecification;
	public stringify(): string {
		const versionSection = "#version 300 es";
		const precisionSection = `precision ${this.precision}p float;`;
		const uniformsSection = Object.entries(this.uniformsDeclarations)
			.map(([name, type]) => `uniform ${type} u_${name};`)
			.join("\n");
		const varyingsSection = Object.entries(this.varyingsDeclarations)
			.map(([name, type]) => `in ${type} v_${name};`)
			.join("\n");
		const outputsSection = Object.entries(this.outputsDeclarations)
			.map(([name, type]) => `out ${type} o_${name};`)
			.join("\n");
		const mainSection = this.mainSpecification.stringify();
		return `${versionSection}
${precisionSection}
${uniformsSection}
${varyingsSection}
${outputsSection}
${mainSection}`;
	}
}
