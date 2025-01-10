import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.ts";
import {createShader} from "./createShader.ts";
import type {VariableName} from "./VariableName.ts";
import type {FragmentShaderConfiguration} from "./FragmentShaderConfiguration.ts";
export function createFragmentShader<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
>(
	configuration: FragmentShaderConfiguration<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>,
	gl: WebGL2RenderingContext,
): WebGLShader {
	const sourceCode = createFragmentShaderSourceCode(
		configuration.uniformVariableNameToVariableType,
		configuration.varyingVariableNameToVariableType,
		configuration.outputVariableNameToVariableType,
		configuration.globalContent,
		configuration.sourceCodeMainContentCreator,
		configuration.precision,
	);
	const shader = createShader(gl, gl.FRAGMENT_SHADER, sourceCode);
	return shader;
}
