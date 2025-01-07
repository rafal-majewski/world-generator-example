import {createFragmentShader} from "./createFragmentShader.ts";
import {createVertexShader} from "./createVertexShader.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGlProgramConfiguration} from "./WebGlProgramConfiguration.ts";
export function createProgram<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
	configuration: WebGlProgramConfiguration<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName,
		OutputVariableName
	>,
	gl: WebGL2RenderingContext,
): WebGLProgram {
	const vertexShader = createVertexShader(
		uniformVariableNameToVariableType,
		attributeVariableNameToVariableType,
		configuration,
		gl,
	);
	const fragmentShader = createFragmentShader(uniformVariableNameToVariableType, configuration, gl);
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
