import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "../variable-type/VariableType.ts";
import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.ts";
import type {FragmentWebGlProgramWrapperShaderSourceCodeData} from "./FragmentWebGlProgramWrapperShaderSourceCodeData.ts";
import {createProgramFromShaderSourceCodes} from "./old/createProgramFromShaderSourceCodes.ts";
import {createVertexShaderSourceCode} from "./old/createVertexShaderSourceCode.ts";
import {setUpAttributes} from "./old/setUpAttributes.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VertexWebGlProgramWrapperShaderSourceCodeData} from "./VertexWebGlProgramWrapperShaderSourceCodeData.ts";
export function createProgramForWrapper<
	AttributeVariableNameToVariableType extends Record<AttributeVariableName, VariableType>,
	VertexShaderPrecision extends ShaderPrecision,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	VertexShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
	VaryingVariableNameToVariableType extends Record<VaryingVariableName, VariableType>,
	FragmentShaderPrecision extends ShaderPrecision,
	OutputVariableName extends VariableName,
	FragmentShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
	OutputVariableNameToVariableType extends Record<VaryingVariableName, VariableType>,
>(
	gl: WebGL2RenderingContext,
	attributeVariableNameToVariableType: AttributeVariableNameToVariableType,
	vertexShaderData: VertexWebGlProgramWrapperShaderSourceCodeData<
		VertexShaderPrecision,
		{
			attribute: AttributeVariableName;
			uniform: never;
			outputVarying: VaryingVariableName;
		},
		VertexShaderSourceCodeMainContent
	>,
	varyingVariableNameToVariableType: VaryingVariableNameToVariableType,
	fragmentShaderData: FragmentWebGlProgramWrapperShaderSourceCodeData<
		FragmentShaderPrecision,
		{
			uniform: never;
			inputVarying: VaryingVariableName;
			output: OutputVariableName;
		},
		FragmentShaderSourceCodeMainContent
	>,
	outputVariableNameToVariableType: OutputVariableNameToVariableType,
): WebGLProgram {
	// const vertexShaderSourceCode = createVertexShaderSourceCode(
	// 	vertexShaderData,
	// 	{} as const,
	// 	attributeVariableNameToVariableType,
	// 	varyingVariableNameToVariableType,
	// );
	// const fragmentShaderSourceCode = createFragmentShaderSourceCode(
	// 	fragmentShaderData,
	// 	{} as const,
	// 	varyingVariableNameToVariableType,
	// 	outputVariableNameToVariableType,
	// );
	// setUpAttributes(attributeVariableNameToVariableType, gl, program);
	// const program = createProgramFromShaderSourceCodes(
	// 	gl,
	// 	vertexShaderSourceCode,
	// 	fragmentShaderSourceCode,
	// );
}
