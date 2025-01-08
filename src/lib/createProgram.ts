import {createFragmentShader} from "./createFragmentShader.ts";
import {createVertexShader} from "./createVertexShader.ts";
import type {VariableName} from "./VariableName.ts";
import {WebGlFragmentShaderConfiguration} from "./WebGlFragmentShaderConfiguration.ts";
import type {WebGlProgramConfiguration} from "./WebGlProgramConfiguration.ts";
import {WebGlVertexShaderConfiguration} from "./WebGlVertexShaderConfiguration.ts";
export function createProgram<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
>(
	configuration: WebGlProgramConfiguration<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName,
		OutputVariableName
	>,
	gl: WebGL2RenderingContext,
): WebGLProgram {
	const vertexShaderConfiguration = new WebGlVertexShaderConfiguration(
		configuration.uniformVariableNameToVariableType,
		configuration.attributeVariableNameToVariableType,
		configuration.varyingVariableNameToVariableType,
		configuration.vertexShaderSourceCodeMainContentCreator,
		configuration.vertexShaderPrecision,
	);
	const vertexShader = createVertexShader(vertexShaderConfiguration, gl);
	const fragmentShaderConfiguration = new WebGlFragmentShaderConfiguration(
		configuration.uniformVariableNameToVariableType,
		configuration.varyingVariableNameToVariableType,
		configuration.outputVariableNameToVariableType,
		configuration.fragmentShaderSourceCodeMainContentCreator,
		configuration.fragmentShaderPrecision,
	);
	const fragmentShader = createFragmentShader(fragmentShaderConfiguration, gl);
	const program = gl.createProgram();
	if (program === null) {
		throw new Error("Could not create WebGL program.");
	}
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		const reason = gl.getProgramInfoLog(program);
		throw new Error(`Could not compile WebGL program.${reason === null ? "" : `\n\n${reason}`}`);
	}
	return program;
}
