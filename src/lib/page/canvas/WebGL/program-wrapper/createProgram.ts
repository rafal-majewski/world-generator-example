import {createFragmentShader} from "./createFragmentShader.ts";
import {createVertexShader} from "./createVertexShader.ts";
import type {FragmentWebGlProgramWrapperShaderSourceCodeData} from "./FragmentWebGlProgramWrapperShaderSourceCodeData.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {VertexWebGlProgramWrapperShaderSourceCodeData} from "./VertexWebGlProgramWrapperShaderSourceCodeData.ts";
export function createProgram<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	VertexShaderPrecision extends ShaderPrecision,
	VertexShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
	OutputVariableName extends VariableName,
	FragmentShaderPrecision extends ShaderPrecision,
	FragmentShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
>(
	uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
	attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
	vertexShaderData: VertexWebGlProgramWrapperShaderSourceCodeData<
		VertexShaderPrecision,
		{
			attribute: AttributeVariableName;
			uniform: UniformVariableName;
			outputVarying: VaryingVariableName;
		},
		VertexShaderSourceCodeMainContent
	>,
	gl: WebGL2RenderingContext,
	outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
	fragmentShaderData: FragmentWebGlProgramWrapperShaderSourceCodeData<
		FragmentShaderPrecision,
		{
			uniform: UniformVariableName;
			inputVarying: VaryingVariableName;
			output: OutputVariableName;
		},
		FragmentShaderSourceCodeMainContent
	>,
): WebGLProgram {
	const vertexShader = createVertexShader(
		uniformVariableNameToVariableType,
		attributeVariableNameToVariableType,
		varyingVariableNameToVariableType,
		vertexShaderData.mainContentCreator,
		vertexShaderData.precision,
		gl,
	);
	const fragmentShader = createFragmentShader(
		uniformVariableNameToVariableType,
		varyingVariableNameToVariableType,
		outputVariableNameToVariableType,
		fragmentShaderData.mainContentCreator,
		fragmentShaderData.precision,
		gl,
	);
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
