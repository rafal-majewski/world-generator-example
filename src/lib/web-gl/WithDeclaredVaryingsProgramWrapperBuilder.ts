import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {ComputeVariablesDeclarationsFromVariablesSpecifications} from "./ComputeVariablesDeclarationsFromVariablesSpecifications.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCodeBuilder} from "./VertexShaderSourceCodeBuilder.ts";
import type {WithSetMainVertexShaderSourceCodeBuilderCreator} from "./WithSetMainVertexShaderSourceCodeBuilderCreator.ts";
import {WithSetVertexShaderProgramWrapperBuilder} from "./WithSetVertexShaderProgramWrapperBuilder.ts";
export class WithDeclaredVaryingsProgramWrapperBuilder<
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
	public constructor(
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
	) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributeVariablesSpecifications = attributeVariablesSpecifications;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
	}
	public setVertexShaderSourceCode(
		creator: WithSetMainVertexShaderSourceCodeBuilderCreator<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformVariablesSpecificationsToUse>,
			ComputeVariablesDeclarationsFromVariablesSpecifications<AttributeVariablesSpecificationsToUse>,
			VaryingVariablesDeclarationsToUse
		>,
	): WithSetVertexShaderProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse,
		AttributeVariablesSpecificationsToUse,
		VaryingVariablesDeclarationsToUse
	> {
		const sourceCodeBuilder = new VertexShaderSourceCodeBuilder<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformVariablesSpecificationsToUse>,
			ComputeVariablesDeclarationsFromVariablesSpecifications<AttributeVariablesSpecificationsToUse>,
			VaryingVariablesDeclarationsToUse
		>(
			Object.fromEntries(
				Object.entries(this.uniformVariablesSpecifications).map(([name, specification]) => [
					name,
					specification.type,
				]),
			) as unknown as ComputeVariablesDeclarationsFromVariablesSpecifications<UniformVariablesSpecificationsToUse>,
			Object.fromEntries(
				Object.entries(this.attributeVariablesSpecifications).map(([name, specification]) => [
					name,
					specification.type,
				]),
			) as unknown as ComputeVariablesDeclarationsFromVariablesSpecifications<AttributeVariablesSpecificationsToUse>,
			this.varyingVariablesDeclarations,
		);
		const sourceCode = creator(sourceCodeBuilder).build();
		const newProgramWrapperBuilder = new WithSetVertexShaderProgramWrapperBuilder<
			Scene,
			Vertex,
			UniformVariablesSpecificationsToUse,
			AttributeVariablesSpecificationsToUse,
			VaryingVariablesDeclarationsToUse
		>(
			this.uniformVariablesSpecifications,
			this.trianglesSelector,
			this.attributeVariablesSpecifications,
			this.varyingVariablesDeclarations,
			sourceCode,
		);
		return newProgramWrapperBuilder;
	}
}
