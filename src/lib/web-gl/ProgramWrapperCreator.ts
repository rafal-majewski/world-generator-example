import type {FragmentShaderSourceCodeMainContentCreator} from "./FragmentShaderSourceCodeMainContentCreator.ts";
import {ProgramWrapper} from "./ProgramWrapper.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariableSpecification} from "./VariableSpecification.ts";
import type {VariableType} from "./VariableType.ts";
import type {VertexShaderSourceCodeMainContentCreator} from "./VertexShaderSourceCodeMainContentCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class ProgramWrapperCreator<
	Scene,
	Vertex,
	UniformVariableName extends VariableName,
	AttributeVariableName extends VariableName,
	VaryingVariableName extends VariableName,
	OutputVariableName extends VariableName,
> implements WithoutContextDrawableCreator<Scene>
{
	public constructor(
		uniformVariableNameToVariableSpecification: Readonly<
			Record<UniformVariableName, VariableSpecification<Scene>>
		>,
		attributeVariableNameToVariableSpecification: Readonly<
			Record<AttributeVariableName, VariableSpecification<Vertex>>
		>,
		varyingVariableNameToVariableType: Readonly<Record<VaryingVariableName, VariableType>>,
		vertexShaderGlobalSourceCode: string,
		vertexShaderMainContentCreator: VertexShaderSourceCodeMainContentCreator<
			UniformVariableName,
			AttributeVariableName,
			VaryingVariableName
		>,
		vertexShaderPrecision: ShaderPrecision,
		outputVariableNameToVariableType: Readonly<Record<OutputVariableName, VariableType>>,
		fragmentShaderGlobalSourceCode: string,
		fragmentShaderMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
			UniformVariableName,
			VaryingVariableName,
			OutputVariableName
		>,
		fragmentShaderPrecision: ShaderPrecision,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
	) {
		this.uniformVariableNameToVariableSpecification = uniformVariableNameToVariableSpecification;
		this.attributeVariableNameToVariableSpecification =
			attributeVariableNameToVariableSpecification;
		this.varyingVariableNameToVariableType = varyingVariableNameToVariableType;
		this.vertexShaderGlobalSourceCode = vertexShaderGlobalSourceCode;
		this.vertexShaderMainContentCreator = vertexShaderMainContentCreator;
		this.vertexShaderPrecision = vertexShaderPrecision;
		this.outputVariableNameToVariableType = outputVariableNameToVariableType;
		this.fragmentShaderGlobalSourceCode = fragmentShaderGlobalSourceCode;
		this.fragmentShaderMainContentCreator = fragmentShaderMainContentCreator;
		this.fragmentShaderPrecision = fragmentShaderPrecision;
		this.trianglesSelector = trianglesSelector;
	}
	public readonly vertexShaderGlobalSourceCode: string;
	public readonly fragmentShaderGlobalSourceCode: string;
	public readonly uniformVariableNameToVariableSpecification: Readonly<
		Record<UniformVariableName, VariableSpecification<Scene>>
	>;
	public readonly attributeVariableNameToVariableSpecification: Readonly<
		Record<AttributeVariableName, VariableSpecification<Vertex>>
	>;
	public readonly varyingVariableNameToVariableType: Readonly<
		Record<VaryingVariableName, VariableType>
	>;
	public readonly vertexShaderMainContentCreator: VertexShaderSourceCodeMainContentCreator<
		UniformVariableName,
		AttributeVariableName,
		VaryingVariableName
	>;
	public readonly vertexShaderPrecision: ShaderPrecision;
	public readonly outputVariableNameToVariableType: Readonly<
		Record<OutputVariableName, VariableType>
	>;
	public readonly fragmentShaderMainContentCreator: FragmentShaderSourceCodeMainContentCreator<
		UniformVariableName,
		VaryingVariableName,
		OutputVariableName
	>;
	public readonly fragmentShaderPrecision: ShaderPrecision;
	public readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	public create(gl: WebGL2RenderingContext): ProgramWrapper<Scene, Vertex> {
		const programWrapper = ProgramWrapper.create(gl, {
			uniformVariableNameToVariableSpecification: this.uniformVariableNameToVariableSpecification,
			attributeVariableNameToVariableSpecification:
				this.attributeVariableNameToVariableSpecification,
			varyingVariableNameToVariableType: this.varyingVariableNameToVariableType,
			vertexShaderGlobalSourceCode: this.vertexShaderGlobalSourceCode,
			vertexShaderMainContentCreator: this.vertexShaderMainContentCreator,
			vertexShaderPrecision: this.vertexShaderPrecision,
			outputVariableNameToVariableType: this.outputVariableNameToVariableType,
			fragmentShaderGlobalSourceCode: this.fragmentShaderGlobalSourceCode,
			fragmentShaderMainContentCreator: this.fragmentShaderMainContentCreator,
			fragmentShaderPrecision: this.fragmentShaderPrecision,
			trianglesSelector: this.trianglesSelector,
		});
		return programWrapper;
	}
}
