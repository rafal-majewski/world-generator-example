import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderMainSpecification} from "./VertexShaderMainSpecification.ts";
export class VertexShaderSpecification {
	public constructor(
		precision: ShaderPrecision,
		uniformsDeclarations: VariablesDeclarations,
		attributesDeclarations: VariablesDeclarations,
		varyingsDeclarations: VariablesDeclarations,
		mainSpecification: VertexShaderMainSpecification,
	) {
		this.precision = precision;
		this.uniformsDeclarations = uniformsDeclarations;
		this.attributesDeclarations = attributesDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
		this.mainSpecification = mainSpecification;
	}
	public readonly precision: ShaderPrecision;
	private readonly uniformsDeclarations: VariablesDeclarations;
	private readonly attributesDeclarations: VariablesDeclarations;
	private readonly varyingsDeclarations: VariablesDeclarations;
	public readonly mainSpecification: VertexShaderMainSpecification;
	public stringify(): string {
		const versionSection = "#version 300 es";
		const precisionSection = `precision ${this.precision}p float;`;
		const uniformsSection = Object.entries(this.uniformsDeclarations)
			.map(([name, type]) => `uniform ${type} u_${name};`)
			.join("\n");
		const attributesSection = Object.entries(this.attributesDeclarations)
			.map(([name, type]) => `in ${type} a_${name};`)
			.join("\n");
		const varyingsSection = Object.entries(this.varyingsDeclarations)
			.map(([name, type]) => `out ${type} v_${name};`)
			.join("\n");
		const mainSection = this.mainSpecification.stringify();
		return `${versionSection}
${precisionSection}
${uniformsSection}
${attributesSection}
${varyingsSection}
${mainSection}`;
	}
}
