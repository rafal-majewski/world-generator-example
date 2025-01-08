import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {WebGlVertexShaderSourceCodeMainContentCreator} from "./WebGlVertexShaderSourceCodeMainContentCreator.ts";
import type {WebGlFragmentShaderSourceCodeMainContentCreator} from "./WebGlFragmentShaderSourceCodeMainContentCreator.ts";
export class WebGlProgramConfiguration<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> {
	public constructor(
		uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
		attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		vertexShaderGlobalSourceCode: string,
		vertexShaderSourceCodeMainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		vertexShaderPrecision: ShaderPrecision,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
		fragmentShaderGlobalSourceCode: string,
		fragmentShaderSourceCodeMainContentCreator: WebGlFragmentShaderSourceCodeMainContentCreator<
			UniformVariableName,
			VaryingVariableName,
			OutputVariableName
		>,
		fragmentShaderPrecision: ShaderPrecision,
	) {
		this.uniformVariableNameToVariableType = uniformVariableNameToVariableType;
		this.attributeVariableNameToVariableType = attributeVariableNameToVariableType;
		this.varyingVariableNameToVariableType = varyingVariableNameToVariableType;
		this.vertexShaderGlobalSourceCode = vertexShaderGlobalSourceCode;
		this.vertexShaderSourceCodeMainContentCreator = vertexShaderSourceCodeMainContentCreator;
		this.vertexShaderPrecision = vertexShaderPrecision;
		this.outputVariableNameToVariableType = outputVariableNameToVariableType;
		this.fragmentShaderGlobalSourceCode = fragmentShaderGlobalSourceCode;
		this.fragmentShaderSourceCodeMainContentCreator = fragmentShaderSourceCodeMainContentCreator;
		this.fragmentShaderPrecision = fragmentShaderPrecision;
	}
	public readonly vertexShaderGlobalSourceCode: string;
	public readonly fragmentShaderGlobalSourceCode: string;
	public readonly uniformVariableNameToVariableType: Readonly<
		Record<UniformVariableName, VariableType>
	>;
	public readonly attributeVariableNameToVariableType: Readonly<
		Record<AttributeVariableName, VariableType>
	>;
	public readonly varyingVariableNameToVariableType: Readonly<
		Record<VaryingVariableName, VariableType>
	>;
	public readonly vertexShaderSourceCodeMainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	public readonly vertexShaderPrecision: ShaderPrecision;
	public readonly outputVariableNameToVariableType: Readonly<
		Record<OutputVariableName, VariableType>
	>;
	public readonly fragmentShaderSourceCodeMainContentCreator: WebGlFragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	public readonly fragmentShaderPrecision: ShaderPrecision;
}
