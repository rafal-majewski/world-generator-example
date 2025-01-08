import type {VariableName} from "./VariableName.ts";
import type {WebGlShaderSourceCodeMainContentCreator} from "./WebGlShaderSourceCodeMainContentCreator.ts";
export type WebGlVertexShaderSourceCodeMainContentCreator<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
> = WebGlShaderSourceCodeMainContentCreator<
	"uniform" | "outputVarying" | "attribute",
	Readonly<{
		uniform: UniformVariableName;
		outputVarying: VaryingVariableName;
		attribute: AttributeVariableName;
	}>
>;
