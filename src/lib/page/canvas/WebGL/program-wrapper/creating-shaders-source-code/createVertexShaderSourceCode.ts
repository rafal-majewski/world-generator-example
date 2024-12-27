import {createShaderSourceCodeVariableSection} from "./section/createShaderSourceCodeVariableSection.ts";
import type {ShaderPrecision} from "../shader-precision/ShaderPrecision.ts";
import type {SourceCodeMainContentCreator} from "./SourceCodeMainContentCreator.ts";
import type {VariableName} from "../../variable-name/VariableName.ts";
import type {VariableNameToVariableType} from "../../variable-name-to-variable-type/VariableNameToVariableType.ts";
export function createVertexShaderSourceCode<
	ShaderPrecisionToUse extends ShaderPrecision,
	UniformVariableName extends VariableName,
	UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
	AttributeVariableName extends VariableName,
	AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
	VaryingVariableName extends VariableName,
	VaryingVariableNameToVariableType extends VariableNameToVariableType<VaryingVariableName>,
	SourceCodeMainContent extends string,
>(
	precision: ShaderPrecisionToUse,
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
