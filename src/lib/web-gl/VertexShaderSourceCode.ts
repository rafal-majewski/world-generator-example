import type {FinalizedVertexShaderSourceCodeMainStatements} from "./FinalizedVertexShaderSourceCodeMainStatements.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCode} from "./ShaderSourceCode.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
export class VertexShaderSourceCode implements ShaderSourceCode {
	public constructor(
		precision: ShaderPrecision,
		uniformVariablesDeclarations: VariablesDeclarations,
		attributeVariablesDeclarations: VariablesDeclarations,
		varyingVariablesDeclarations: VariablesDeclarations,
		body: FinalizedVertexShaderSourceCodeMainStatements,
	) {
		this.precision = precision;
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.body = body;
	}
	public readonly precision: ShaderPrecision;
	private readonly uniformVariablesDeclarations: VariablesDeclarations;
	private readonly attributeVariablesDeclarations: VariablesDeclarations;
	private readonly varyingVariablesDeclarations: VariablesDeclarations;
	public readonly body: FinalizedVertexShaderSourceCodeMainStatements;
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
		const mainSection = `void main() {
${this.body.stringify(1)}
}`;
		return `${versionSection}
${precisionSection}
${uniformsSection}
${attributesSection}
${varyingsSection}
${mainSection}`;
	}
}
