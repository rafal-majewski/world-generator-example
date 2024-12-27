import {createShaderSourceCodeVariableSection} from "./createShaderSourceCodeVariableSection.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {SourceCodeMainContentCreator} from "./SourceCodeMainContentCreator.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";
export function createFragmentShaderSourceCode<
	ShaderPrecisionToUse extends ShaderPrecision,
	UniformVariableName extends VariableName,
	UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
	VaryingVariableName extends VariableName,
	VaryingVariableNameToVariableType extends VariableNameToVariableType<VaryingVariableName>,
	OutputVariableName extends VariableName,
	OutputVariableNameToVariableType extends VariableNameToVariableType<OutputVariableName>,
	SourceCodeMainContent extends VariableName,
>(
	precision: ShaderPrecisionToUse,
	uniformVariableNameToVariableType: UniformVariableNameToVariableType,
	varyingVariableNameToVariableType: VaryingVariableNameToVariableType,
	outputVariableNameToVariableType: OutputVariableNameToVariableType,
	createMainContent: SourceCodeMainContentCreator<
		Readonly<{
			uniforms: Readonly<{
				[Name in UniformVariableName]: `u_${Name}`;
			}>;
			ins: Readonly<{
				[Name in VaryingVariableName]: `v_${Name}`;
			}>;
			outs: Readonly<{
				[Name in OutputVariableName]: `o_${Name}`;
			}>;
		}>,
		SourceCodeMainContent
	>,
) {
	const uniformSection = createShaderSourceCodeVariableSection(
		"uniform",
		uniformVariableNameToVariableType,
	);
	const inputVaryingSection = createShaderSourceCodeVariableSection(
		"inputVarying",
		varyingVariableNameToVariableType,
	);
	const outputSection = createShaderSourceCodeVariableSection(
		"output",
		outputVariableNameToVariableType,
	);
	const mainContent = createMainContent({
		uniforms: Object.fromEntries(
			Object.keys(uniformVariableNameToVariableType).map((name) => [name, `u_${name}`]),
		) as Readonly<{
			[Name in UniformVariableName]: `u_${Name}`;
		}>,
		ins: Object.fromEntries(
			Object.keys(varyingVariableNameToVariableType).map((name) => [name, `v_${name}`]),
		) as Readonly<{
			[Name in VaryingVariableName]: `v_${Name}`;
		}>,
		outs: Object.fromEntries(
			Object.keys(outputVariableNameToVariableType).map((name) => [name, `o_${name}`]),
		) as Readonly<{
			[Name in OutputVariableName]: `o_${Name}`;
		}>,
	});
	const mainContentLines = mainContent.split("\n");
	const indentedMainContentLines = mainContentLines.map((line) => `	${line}`);
	const indentedMainContent = indentedMainContentLines.join("\n");
	return `#version 300 es
precision ${precision} float;
${uniformSection}
${inputVaryingSection}
${outputSection}
void main() {
${indentedMainContent}
}
` as const;
}
