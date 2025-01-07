import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "./VariableType.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreator} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreator.ts";
export interface WebGlVertexShaderConfiguration<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
> {
	varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>;
	createVertexShaderMainContent: WebGLProgramWrapperShaderSourceCodeMainContentCreator<
		"uniform" | "attribute" | "outputVarying",
		Readonly<{
			uniform: UniformVariableName;
			attribute: AttributeVariableName;
			outputVarying: VaryingVariableName;
		}>
	>;
	vertexShaderPrecision: ShaderPrecision;
}
