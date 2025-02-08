import type {ComputeVariablesDeclarationsFromVariablesSpecifications} from "./ComputeVariablesDeclarationsFromVariablesSpecifications.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import {VertexShaderSpecificationBuilder} from "./VertexShaderSpecificationBuilder.ts";
import type {VertexShaderSpecificationCreator} from "./VertexShaderSpecificationCreator.ts";
import {WithSpecifiedVertexShaderProgramWrapperCreatorBuilder} from "./WithSpecifiedVertexShaderProgramWrapperCreatorBuilder.ts";
export class WithDeclaredVaryingsProgramWrapperCreatorBuilder<
	Scene,
	Vertex,
	UniformsSpecifications extends VariablesSpecifications<Scene>,
	AttributesSpecifications extends VariablesSpecifications<Vertex>,
	VaryingsDeclarations extends VariablesDeclarations,
> {
	private readonly uniformsSpecifications: UniformsSpecifications;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly attributesSpecifications: AttributesSpecifications;
	private readonly varyingsDeclarations: VaryingsDeclarations;
	public constructor(
		uniformsSpecifications: UniformsSpecifications,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributesSpecifications: AttributesSpecifications,
		varyingsDeclarations: VaryingsDeclarations,
	) {
		this.uniformsSpecifications = uniformsSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributesSpecifications = attributesSpecifications;
		this.varyingsDeclarations = varyingsDeclarations;
	}
	public specifyVertexShader(
		creator: VertexShaderSpecificationCreator<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformsSpecifications>,
			ComputeVariablesDeclarationsFromVariablesSpecifications<AttributesSpecifications>,
			VaryingsDeclarations
		>,
	): WithSpecifiedVertexShaderProgramWrapperCreatorBuilder<
		Scene,
		Vertex,
		UniformsSpecifications,
		AttributesSpecifications,
		VaryingsDeclarations
	> {
		const specificationBuilder = new VertexShaderSpecificationBuilder<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformsSpecifications>,
			ComputeVariablesDeclarationsFromVariablesSpecifications<AttributesSpecifications>,
			VaryingsDeclarations
		>(
			Object.fromEntries(
				Object.entries(this.uniformsSpecifications).map(([name, specification]) => [
					name,
					specification.type,
				]),
			) as unknown as Readonly<{
				[Name in keyof UniformsSpecifications]: UniformsSpecifications[Name]["type"];
			}>,
			Object.fromEntries(
				Object.entries(this.attributesSpecifications).map(([name, specification]) => [
					name,
					specification.type,
				]),
			) as unknown as Readonly<{
				[Name in keyof AttributesSpecifications]: AttributesSpecifications[Name]["type"];
			}>,
			this.varyingsDeclarations,
		);
		const specification = creator(specificationBuilder);
		const newCreatorBuilder = new WithSpecifiedVertexShaderProgramWrapperCreatorBuilder<
			Scene,
			Vertex,
			UniformsSpecifications,
			AttributesSpecifications,
			VaryingsDeclarations
		>(
			this.uniformsSpecifications,
			this.trianglesSelector,
			this.attributesSpecifications,
			this.varyingsDeclarations,
			specification,
		);
		return newCreatorBuilder;
	}
}
