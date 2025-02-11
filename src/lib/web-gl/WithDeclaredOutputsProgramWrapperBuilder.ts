import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {ComputeVariablesDeclarationsFromVariablesSpecifications} from "./ComputeVariablesDeclarationsFromVariablesSpecifications.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCode} from "./VertexShaderSourceCode.ts";
import {WithSetFragmentShaderProgramWrapperBuilder} from "./WithSetFragmentShaderProgramWrapperBuilder.ts";
import {FragmentShaderSourceCodeBuilder} from "./FragmentShaderSourceCodeBuilder.ts";
import type {WithSetMainFragmentShaderSourceCodeBuilderCreator} from "./WithSetMainFragmentShaderSourceCodeBuilderCreator.ts";
export class WithDeclaredOutputsProgramWrapperBuilder<
	Scene,
	Vertex,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
	AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Vertex>,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesSpecifications: UniformVariablesSpecificationsToUse;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly outputVariablesDeclarations: OutputVariablesDeclarationsToUse;
	private readonly vertexShaderSourceCode: VertexShaderSourceCode;
	public constructor(
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		vertexShaderSourceCode: VertexShaderSourceCode,
		outputVariablesDeclarations: OutputVariablesDeclarationsToUse,
	) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributeVariablesSpecifications = attributeVariablesSpecifications;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.vertexShaderSourceCode = vertexShaderSourceCode;
		this.outputVariablesDeclarations = outputVariablesDeclarations;
	}
	public setFragmentShader(
		creator: WithSetMainFragmentShaderSourceCodeBuilderCreator<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformVariablesSpecificationsToUse>,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse
		>,
	): WithSetFragmentShaderProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse,
		AttributeVariablesSpecificationsToUse
	> {
		const fragmentShaderSourceCodeBuilder = new FragmentShaderSourceCodeBuilder<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformVariablesSpecificationsToUse>,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse
		>(
			Object.fromEntries(
				Object.entries(this.uniformVariablesSpecifications).map(([name, specification]) => [
					name,
					specification.type,
				]),
			) as unknown as ComputeVariablesDeclarationsFromVariablesSpecifications<UniformVariablesSpecificationsToUse>,
			this.varyingVariablesDeclarations,
			this.outputVariablesDeclarations,
		);
		const fragmentShaderSourceSourceCode = creator(fragmentShaderSourceCodeBuilder).build();
		const newProgramWrapperBuilder = new WithSetFragmentShaderProgramWrapperBuilder<
			Scene,
			Vertex,
			UniformVariablesSpecificationsToUse,
			AttributeVariablesSpecificationsToUse
		>(
			this.uniformVariablesSpecifications,
			this.trianglesSelector,
			this.attributeVariablesSpecifications,
			this.vertexShaderSourceCode,
			fragmentShaderSourceSourceCode,
		);
		return newProgramWrapperBuilder;
	}
}
