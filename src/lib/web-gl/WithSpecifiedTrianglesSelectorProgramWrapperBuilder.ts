import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import {attributeVariablesSpecificationsConstructors} from "./attributeVariablesSpecificationsConstructors.ts";
import type {AttributeVariablesSpecificationsCreator} from "./AttributeVariablesSpecificationsCreator.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import {WithSpecifiedAttributesProgramWrapperBuilder} from "./WithSpecifiedAttributesProgramWrapperBuilder.ts";
export class WithSpecifiedTrianglesSelectorProgramWrapperBuilder<
	Scene,
	Vertex,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
> {
	public specifyAttributes<
		AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Vertex>,
	>(
		builder: AttributeVariablesSpecificationsCreator<Vertex, AttributeVariablesSpecificationsToUse>,
	): WithSpecifiedAttributesProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse,
		AttributeVariablesSpecificationsToUse
	> {
		const attributeVariablesSpecifications = builder(attributeVariablesSpecificationsConstructors);
		const newProgramWrapperBuilder = new WithSpecifiedAttributesProgramWrapperBuilder<
			Scene,
			Vertex,
			UniformVariablesSpecificationsToUse,
			AttributeVariablesSpecificationsToUse
		>(
			this.uniformVariablesSpecifications,
			this.trianglesSelector,
			attributeVariablesSpecifications,
		);
		return newProgramWrapperBuilder;
	}
	public constructor(
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
	) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
		this.trianglesSelector = trianglesSelector;
	}
	private readonly uniformVariablesSpecifications: UniformVariablesSpecificationsToUse;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
}
