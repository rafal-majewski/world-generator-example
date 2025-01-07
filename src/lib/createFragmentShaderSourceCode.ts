import {createShaderSourceCodeVariableSection} from "./createShaderSourceCodeVariableSection.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlFragmentShaderConfiguration} from "./WebGlFragmentShaderConfiguration.ts";
export function createFragmentShaderSourceCode<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	configuration: WebGlFragmentShaderConfiguration<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>,
) {
	const uniformSection = createShaderSourceCodeVariableSection(
		"uniform",
		uniformVariableNameToVariableType,
	);
	const inputVaryingSection = createShaderSourceCodeVariableSection(
		"inputVarying",
		configuration.varyingVariableNameToVariableType,
	);
	const outputSection = createShaderSourceCodeVariableSection(
		"output",
		configuration.outputVariableNameToVariableType,
	);
	const mainContent = configuration.createFragmentShaderMainContent({
		uniforms: Object.fromEntries(
			Object.keys(uniformVariableNameToVariableType).map((name) => [name, `u_${name}`]),
		) as Readonly<{
			[Name in UniformVariableName]: `u_${Name}`;
		}>,
		ins: Object.fromEntries(
			Object.keys(configuration.varyingVariableNameToVariableType).map((name) => [
				name,
				`v_${name}`,
			]),
		) as Readonly<{
			[Name in VaryingVariableName]: `v_${Name}`;
		}>,
		outs: Object.fromEntries(
			Object.keys(configuration.outputVariableNameToVariableType).map((name) => [
				name,
				`o_${name}`,
			]),
		) as Readonly<{
			[Name in OutputVariableName]: `o_${Name}`;
		}>,
	});
	const mainContentLines = mainContent.split("\n");
	const indentedMainContentLines = mainContentLines.map((line) => `	${line}`);
	const indentedMainContent = indentedMainContentLines.join("\n");
	return `#version 300 es
precision ${configuration.fragmentShaderPrecision} float;
${uniformSection}
${inputVaryingSection}
${outputSection}
void main() {
${indentedMainContent}
}
` as const;
}
