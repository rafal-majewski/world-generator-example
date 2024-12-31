import type {ShaderPrecision} from "../ShaderPrecision.ts";

export function createVertexShaderSourceCode<
	PrecisionToUse extends ShaderPrecision,
	AttributeVariableNameToVariableType extends Record<AttributeVariableName, VariableType>,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	VertexShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
	VaryingVariableNameToVariableType extends Record<VaryingVariableName, VariableType>,
	OutputVariableName extends VariableName,
	FragmentShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
	OutputVariableNameToVariableType extends Record<VaryingVariableName, VariableType>,
>(
	precision: PrecisionToUse,
	uniformVariableNameToVariableType: UniformVariableNameToVariableType,
	attributeVariableNameToVariableType: AttributeVariableNameToVariableType,
	varyingVariableNameToVariableType: VaryingVariableNameToVariableType,
	createMainContent: SourceCodeMainContentCreator<
		Readonly<{
			uniforms: Readonly<{
				[Name in UniformVariableName]: `u_${Name}`;
			}>;
			ins: Readonly<{
				[Name in AttributeVariableName]: `a_${Name}`;
			}>;
			outs: Readonly<{
				[Name in VaryingVariableName]: `v_${Name}`;
			}>;
		}>,
		SourceCodeMainContent
	>,
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
	const mainContent = createMainContent({
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
void main() {
${indentedMainContent}
}
` as const;
}
