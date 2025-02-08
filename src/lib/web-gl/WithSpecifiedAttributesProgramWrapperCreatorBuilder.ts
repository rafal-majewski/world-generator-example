import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import {WithDeclaredVaryingsProgramWrapperCreatorBuilder} from "./WithDeclaredVaryingsProgramWrapperCreatorBuilder.ts";
export class WithSpecifiedAttributesProgramWrapperCreatorBuilder<
	Scene,
	Vertex,
	UniformsSpecifications extends VariablesSpecifications<Scene>,
	AttributesSpecifications extends VariablesSpecifications<Vertex>,
> {
	private readonly uniformsSpecifications: UniformsSpecifications;
	private readonly attributesSpecifications: AttributesSpecifications;
	public constructor(
		uniformsSpecifications: UniformsSpecifications,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributesSpecifications: AttributesSpecifications,
	) {
		this.uniformsSpecifications = uniformsSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributesSpecifications = attributesSpecifications;
	}
	public declareVaryings<VaryingsDeclarations extends VariablesDeclarations>(
		varyingsDeclarations: VaryingsDeclarations,
	): WithDeclaredVaryingsProgramWrapperCreatorBuilder<
		Scene,
		Vertex,
		UniformsSpecifications,
		AttributesSpecifications,
		VaryingsDeclarations
	> {
		const newBuilder = new WithDeclaredVaryingsProgramWrapperCreatorBuilder<
			Scene,
			Vertex,
			UniformsSpecifications,
			AttributesSpecifications,
			VaryingsDeclarations
		>(
			this.uniformsSpecifications,
			this.trianglesSelector,
			this.attributesSpecifications,
			varyingsDeclarations,
		);
		return newBuilder;
	}
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
}
