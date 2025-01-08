import type {VariableName} from "./VariableName.ts";
import type {WebGlShaderSourceCodeMainContentCreator} from "./WebGlShaderSourceCodeMainContentCreator.ts";
export type WebGlFragmentShaderSourceCodeMainContentCreator<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> = WebGlShaderSourceCodeMainContentCreator<
	"uniform" | "inputVarying" | "output",
	Readonly<{
		uniform: UniformVariableName;
		inputVarying: VaryingVariableName;
		output: OutputVariableName;
	}>
>;
