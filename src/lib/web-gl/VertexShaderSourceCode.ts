import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCode} from "./ShaderSourceCode.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMain} from "./VertexShaderSourceCodeMain.ts";
export class VertexShaderSourceCode implements ShaderSourceCode {
	public constructor(
		precision: ShaderPrecision,
		uniformVariablesDeclarations: VariablesDeclarations,
		attributeVariablesDeclarations: VariablesDeclarations,
		varyingVariablesDeclarations: VariablesDeclarations,
		main: VertexShaderSourceCodeMain,
	) {
		this.precision = precision;
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.main = main;
	}
	public readonly precision: ShaderPrecision;
	private readonly uniformVariablesDeclarations: VariablesDeclarations;
	private readonly attributeVariablesDeclarations: VariablesDeclarations;
	private readonly varyingVariablesDeclarations: VariablesDeclarations;
	public readonly main: VertexShaderSourceCodeMain;
	public stringify(): string {
		const versionSection = "#version 300 es";
		const precisionSection = `precision ${this.precision}p float;`;
		const uniformsSection = Object.entries(this.uniformVariablesDeclarations)
			.map(([name, type]) => `uniform ${type} u_${name};`)
			.join("\n");
		const attributesSection = Object.entries(this.attributeVariablesDeclarations)
			.map(([name, type]) => `in ${type} a_${name};`)
			.join("\n");
		const varyingsSection = Object.entries(this.varyingVariablesDeclarations)
			.map(([name, type]) => `out ${type} v_${name};`)
			.join("\n");
		const mainSection = this.main.stringify();
		return `${versionSection}
${precisionSection}
${uniformsSection}
${attributesSection}
${varyingsSection}
${mainSection}`;
	}
}
