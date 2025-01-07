import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.ts";
import {createShader} from "./createShader.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlFragmentShaderConfiguration} from "./WebGlFragmentShaderConfiguration.ts";
export function createFragmentShader<
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
	gl: WebGL2RenderingContext,
): WebGLShader {
	const sourceCode = createFragmentShaderSourceCode(
		uniformVariableNameToVariableType,
		configuration,
	);
	const shader = createShader(gl, gl.FRAGMENT_SHADER, sourceCode);
	return shader;
}
