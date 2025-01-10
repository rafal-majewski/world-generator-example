import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {FragmentShaderSourceCodeMainContentCreator} from "./FragmentShaderSourceCodeMainContentCreator.ts";
export class FragmentShaderConfiguration<
	UniformVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> {
	public constructor(
		uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
		globalContent: string,
		sourceCodeMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
			UniformVariableName,
			VaryingVariableName,
			OutputVariableName
		>,
		precision: ShaderPrecision,
	) {
		this.uniformVariableNameToVariableType = uniformVariableNameToVariableType;
		this.varyingVariableNameToVariableType = varyingVariableNameToVariableType;
		this.outputVariableNameToVariableType = outputVariableNameToVariableType;
		this.globalContent = globalContent;
		this.sourceCodeMainContentCreator = sourceCodeMainContentCreator;
		this.precision = precision;
	}
	public readonly globalContent: string;
	public readonly uniformVariableNameToVariableType: Readonly<
		Record<UniformVariableName, VariableType>
	>;
	public readonly varyingVariableNameToVariableType: Readonly<
		Record<VaryingVariableName, VariableType>
	>;
	public readonly outputVariableNameToVariableType: Readonly<
		Record<OutputVariableName, VariableType>
	>;
	public readonly sourceCodeMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	public readonly precision: ShaderPrecision;
}
