import type {VariableName} from "./VariableName.ts";
import type {ShaderSourceCodeMainContentCreator} from "./ShaderSourceCodeMainContentCreator.ts";
import type {VertexShaderVariableRole} from "./VertexShaderVariableRole.ts";
export type VertexShaderSourceCodeMainContentCreator<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
> = ShaderSourceCodeMainContentCreator<
	VertexShaderVariableRole,
	Readonly<{
		uniform: UniformVariableName;
		outputVarying: VaryingVariableName;
		attribute: AttributeVariableName;
	}>
>;
