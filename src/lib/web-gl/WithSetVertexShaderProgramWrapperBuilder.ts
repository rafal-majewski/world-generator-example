import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCode} from "./VertexShaderSourceCode.ts";
import {WithDeclaredOutputsProgramWrapperBuilder} from "./WithDeclaredOutputsProgramWrapperBuilder.ts";
export class WithSetVertexShaderProgramWrapperBuilder<
	Scene,
	Vertex,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
	AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Vertex>,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesSpecifications: UniformVariablesSpecificationsToUse;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly vertexShaderSourceCode: VertexShaderSourceCode;
	public constructor(
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		vertexShaderSourceCode: VertexShaderSourceCode,
	) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributeVariablesSpecifications = attributeVariablesSpecifications;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.vertexShaderSourceCode = vertexShaderSourceCode;
	}
	public declareOutputs<OutputVariablesDeclarationsToUse extends VariablesDeclarations>(
		outputVariablesDeclarations: OutputVariablesDeclarationsToUse,
	): WithDeclaredOutputsProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse,
		AttributeVariablesSpecificationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse
	> {
		const newBuilder = new WithDeclaredOutputsProgramWrapperBuilder<
			Scene,
			Vertex,
			UniformVariablesSpecificationsToUse,
			AttributeVariablesSpecificationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse
		>(
			this.uniformVariablesSpecifications,
			this.trianglesSelector,
			this.attributeVariablesSpecifications,
			this.varyingVariablesDeclarations,
			this.vertexShaderSourceCode,
			outputVariablesDeclarations,
		);
		return newBuilder;
	}
}
