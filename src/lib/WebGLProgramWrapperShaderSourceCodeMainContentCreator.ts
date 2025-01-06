import type {VariableName} from "./VariableName.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VariableRole} from "./VariableRole.ts";
import type {WebGLProgramWrapperShaderSourceCodeMainContentCreatorVariableParameter} from "./WebGLProgramWrapperShaderSourceCodeMainContentCreatorVariableParameter.ts";
export type WebGLProgramWrapperShaderSourceCodeMainContentCreator<
	VariableRoleToUse extends VariableRole,
	VariableRoleToVariableName extends Record<VariableRoleToUse, VariableName>,
	SourceCodeMainContentToUse extends ShaderSourceCodeMainContent,
> = (
	variables: WebGLProgramWrapperShaderSourceCodeMainContentCreatorVariableParameter<
		VariableRoleToUse,
		VariableRoleToVariableName
	>,
) => SourceCodeMainContentToUse;
