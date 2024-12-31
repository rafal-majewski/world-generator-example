import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableName} from "./VariableName.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {WebGlProgramWrapperShaderSourceCodeData} from "./WebGlProgramWrapperShaderSourceCodeData.ts";
import type {VertexVariableRole} from "./VertexVariableRole.ts";
export type VertexWebGlProgramWrapperShaderSourceCodeData<
	PrecisionToUse extends ShaderPrecision,
	VariableRoleToVariableName extends Record<VertexVariableRole, VariableName>,
	SourceCodeMainContentToUse extends ShaderSourceCodeMainContent,
> = WebGlProgramWrapperShaderSourceCodeData<
	PrecisionToUse,
	VertexVariableRole,
	VariableRoleToVariableName,
	SourceCodeMainContentToUse
>;
