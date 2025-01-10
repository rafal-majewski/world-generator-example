import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {VertexShaderSourceCodeMainContentCreator} from "./VertexShaderSourceCodeMainContentCreator.ts";
import type {FragmentShaderSourceCodeMainContentCreator} from "./FragmentShaderSourceCodeMainContentCreator.ts";
export class ProgramConfiguration<
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
		vertexShaderSourceCodeMainContentCreator: VertexShaderSourceCodeMainContentCreator<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		vertexShaderPrecision: ShaderPrecision,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
		fragmentShaderGlobalSourceCode: string,
		fragmentShaderSourceCodeMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
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
	public readonly vertexShaderSourceCodeMainContentCreator: VertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	public readonly vertexShaderPrecision: ShaderPrecision;
	public readonly outputVariableNameToVariableType: Readonly<
		Record<OutputVariableName, VariableType>
	>;
	public readonly fragmentShaderSourceCodeMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	public readonly fragmentShaderPrecision: ShaderPrecision;
}
