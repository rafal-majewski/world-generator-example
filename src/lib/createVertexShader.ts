import {createShader} from "./createShader.ts";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlVertexShaderConfiguration} from "./WebGlVertexShaderConfiguration.ts";
export function createVertexShader<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
	configuration: WebGlVertexShaderConfiguration<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>,
	gl: WebGL2RenderingContext,
): WebGLShader {
	const sourceCode = createVertexShaderSourceCode(
		uniformVariableNameToVariableType,
		attributeVariableNameToVariableType,
		configuration,
	);
	const shader = createShader(gl, gl.VERTEX_SHADER, sourceCode);
	return shader;
}
