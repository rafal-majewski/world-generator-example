import {createShader} from "./createShader.ts";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.ts";
import type {VariableName} from "./VariableName.ts";
import type {WebGlVertexShaderConfiguration} from "./WebGlVertexShaderConfiguration.ts";
export function createVertexShader<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
>(
	configuration: WebGlVertexShaderConfiguration<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>,
	gl: WebGL2RenderingContext,
): WebGLShader {
	const sourceCode = createVertexShaderSourceCode(
		configuration.uniformVariableNameToVariableType,
		configuration.attributeVariableNameToVariableType,
		configuration.varyingVariableNameToVariableType,
		configuration.globalContent,
		configuration.mainContentCreator,
		configuration.precision,
	);
	const shader = createShader(gl, gl.VERTEX_SHADER, sourceCode);
	return shader;
}
