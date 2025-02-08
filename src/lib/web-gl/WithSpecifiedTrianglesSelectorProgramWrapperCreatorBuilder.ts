import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import {WithSpecifiedAttributesProgramWrapperCreatorBuilder} from "./WithSpecifiedAttributesProgramWrapperCreatorBuilder.ts";
export class WithSpecifiedTrianglesSelectorProgramWrapperCreatorBuilder<
	Scene,
	Vertex,
	UniformsSpecifications extends VariablesSpecifications<Scene>,
> {
	public specifyAttributes<AttributesSpecification extends VariablesSpecifications<Vertex>>(
		attributesSpecification: AttributesSpecification,
	): WithSpecifiedAttributesProgramWrapperCreatorBuilder<
		Scene,
		Vertex,
		UniformsSpecifications,
		AttributesSpecification
	> {
		const newBuilder = new WithSpecifiedAttributesProgramWrapperCreatorBuilder<
			Scene,
			Vertex,
			UniformsSpecifications,
			AttributesSpecification
		>(this.uniformsSpecifications, this.trianglesSelector, attributesSpecification);
		return newBuilder;
	}
	public constructor(
		uniformsSpecifications: UniformsSpecifications,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
	) {
		this.uniformsSpecifications = uniformsSpecifications;
		this.trianglesSelector = trianglesSelector;
	}
	private readonly uniformsSpecifications: UniformsSpecifications;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
}
