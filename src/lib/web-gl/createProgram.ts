import {createFragmentShader} from "./createFragmentShader.ts";
import {createVertexShader} from "./createVertexShader.ts";
import type {VariableName} from "./VariableName.ts";
import {FragmentShaderConfiguration} from "./FragmentShaderConfiguration.ts";
import type {ProgramConfiguration} from "./ProgramConfiguration.ts";
import {VertexShaderConfiguration} from "./VertexShaderConfiguration.ts";
export function createProgram<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
>(
	configuration: ProgramConfiguration<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName,
		OutputVariableName
	>,
	gl: WebGL2RenderingContext,
): WebGLProgram {
	const vertexShaderConfiguration = new VertexShaderConfiguration(
		configuration.uniformVariableNameToVariableType,
		configuration.attributeVariableNameToVariableType,
		configuration.varyingVariableNameToVariableType,
		configuration.vertexShaderGlobalSourceCode,
		configuration.vertexShaderSourceCodeMainContentCreator,
		configuration.vertexShaderPrecision,
	);
	const vertexShader = createVertexShader(vertexShaderConfiguration, gl);
	const fragmentShaderConfiguration = new FragmentShaderConfiguration(
		configuration.uniformVariableNameToVariableType,
		configuration.varyingVariableNameToVariableType,
		configuration.outputVariableNameToVariableType,
		configuration.fragmentShaderGlobalSourceCode,
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
