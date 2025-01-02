import {createShaderSourceCodeVariableSection} from "./createShaderSourceCodeVariableSection.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
export function createFragmentShaderSourceCode<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
	SourceCodeMainContentToUse extends ShaderSourceCodeMainContent,
	PrecisionToUse extends ShaderPrecision,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
	outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
	mainContentCreator: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"inputVarying" | "uniform" | "output",
		Readonly<{
			uniform: UniformVariableName;
			inputVarying: VaryingVariableName;
			output: OutputVariableName;
		}>,
		SourceCodeMainContentToUse
	>,
	precision: PrecisionToUse,
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
	const mainContent = mainContentCreator({
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
