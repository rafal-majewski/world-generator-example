import {createShaderSourceCodeVariableSection} from "./createShaderSourceCodeVariableSection.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlVertexShaderSourceCodeMainContentCreator} from "./WebGlVertexShaderSourceCodeMainContentCreator.ts";
export function createVertexShaderSourceCode<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
	mainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>,
	precision: ShaderPrecision,
) {
	const uniformSection = createShaderSourceCodeVariableSection(
		"uniform",
		uniformVariableNameToVariableType,
	);
	const attributeSection = createShaderSourceCodeVariableSection(
		"attribute",
		attributeVariableNameToVariableType,
	);
	const outputVaryingSection = createShaderSourceCodeVariableSection(
		"outputVarying",
		varyingVariableNameToVariableType,
	);
	const mainContent = mainContentCreator({
		uniforms: Object.fromEntries(
			Object.keys(uniformVariableNameToVariableType).map((name) => [name, `u_${name}`]),
		) as Readonly<{
			[Name in UniformVariableName]: `u_${Name}`;
		}>,
		ins: Object.fromEntries(
			Object.keys(attributeVariableNameToVariableType).map((name) => [name, `a_${name}`]),
		) as Readonly<{
			[Name in AttributeVariableName]: `a_${Name}`;
		}>,
		outs: Object.fromEntries(
			Object.keys(varyingVariableNameToVariableType).map((name) => [name, `v_${name}`]),
		) as Readonly<{
			[Name in VaryingVariableName]: `v_${Name}`;
		}>,
	});
	const mainContentLines = mainContent.split("\n");
	const indentedMainContentLines = mainContentLines.map((line) => `	${line}`);
	const indentedMainContent = indentedMainContentLines.join("\n");
	return `#version 300 es
precision ${precision} float;
${uniformSection}
${attributeSection}
${outputVaryingSection}
uniform vec3 u_sunDirection;
uniform vec3 u_sunColor;
void main() {
${indentedMainContent}
	vec3 lightDirection = normalize(u_sunDirection);
	float lightIntensity = max(dot(lightDirection, vec3(0, 0, 1)), 0.0);
	vec3 diffuse = u_sunColor * lightIntensity;
	v_color = diffuse * a_color;
}
` as const;
}
