import {createShader} from "./createShader.ts";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
export function createVertexShader<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	SourceCodeMainContentToUse extends ShaderSourceCodeMainContent,
	PrecisionToUse extends ShaderPrecision,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
	mainContentCreator: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"uniform" | "attribute" | "outputVarying",
		Readonly<{
			uniform: UniformVariableName;
			attribute: AttributeVariableName;
			outputVarying: VaryingVariableName;
		}>,
		SourceCodeMainContentToUse
	>,
	precision: PrecisionToUse,
	gl: WebGL2RenderingContext,
): WebGLShader {
	const sourceCode = createVertexShaderSourceCode(
		uniformVariableNameToVariableType,
		attributeVariableNameToVariableType,
		varyingVariableNameToVariableType,
		mainContentCreator,
		precision,
	);
	const shader = createShader(gl, gl.VERTEX_SHADER, sourceCode);
	return shader;
}
