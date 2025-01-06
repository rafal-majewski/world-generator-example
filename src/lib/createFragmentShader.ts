import {createFragmentShaderSourceCode} from "./page/createFragmentShaderSourceCode.ts";
import {createShader} from "./createShader.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
export function createFragmentShader<
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
		"uniform" | "output" | "inputVarying",
		Readonly<{
			uniform: UniformVariableName;
			output: OutputVariableName;
			inputVarying: VaryingVariableName;
		}>,
		SourceCodeMainContentToUse
	>,
	precision: PrecisionToUse,
	gl: WebGL2RenderingContext,
): WebGLShader {
	const sourceCode = createFragmentShaderSourceCode(
		uniformVariableNameToVariableType,
		varyingVariableNameToVariableType,
		outputVariableNameToVariableType,
		mainContentCreator,
		precision,
	);
	const shader = createShader(gl, gl.FRAGMENT_SHADER, sourceCode);
	return shader;
}
