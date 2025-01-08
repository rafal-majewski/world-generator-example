import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import type {VariableName} from "./VariableName.ts";
import type {WebGlVertexShaderSourceCodeMainContentCreator} from "./WebGlVertexShaderSourceCodeMainContentCreator.ts";
export class WebGlVertexShaderConfiguration<
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
> {
	public constructor(
		uniformVariableNameToVariableType: Readonly<Record<UniformVariableName, VariableType>>,
		attributeVariableNameToVariableType: Readonly<Record<AttributeVariableName, VariableType>>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		globalContent: string,
		mainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		precision: ShaderPrecision,
	) {
		this.uniformVariableNameToVariableType = uniformVariableNameToVariableType;
		this.attributeVariableNameToVariableType = attributeVariableNameToVariableType;
		this.varyingVariableNameToVariableType = varyingVariableNameToVariableType;
		this.globalContent = globalContent;
		this.mainContentCreator = mainContentCreator;
		this.precision = precision;
	}
	public readonly globalContent: string;
	public readonly uniformVariableNameToVariableType: Readonly<
		Record<UniformVariableName, VariableType>
	>;
	public readonly attributeVariableNameToVariableType: Readonly<
		Record<AttributeVariableName, VariableType>
	>;
	public readonly varyingVariableNameToVariableType: Readonly<
		Record<VaryingVariableName, VariableType>
	>;
	public readonly mainContentCreator: WebGlVertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	public readonly precision: ShaderPrecision;
}
