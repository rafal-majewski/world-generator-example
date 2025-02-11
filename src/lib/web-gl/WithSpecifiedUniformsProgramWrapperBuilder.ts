import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import {WithSpecifiedTrianglesSelectorProgramWrapperBuilder} from "./WithSpecifiedTrianglesSelectorProgramWrapperBuilder.ts";
export class WithSpecifiedUniformsProgramWrapperBuilder<
	Scene,
	Vertex,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
> {
	private readonly uniformVariablesSpecifications: UniformVariablesSpecificationsToUse;
	public specifyTrianglesSelector(
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
	): WithSpecifiedTrianglesSelectorProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse
	> {
		const newProgramWrapperBuilder = new WithSpecifiedTrianglesSelectorProgramWrapperBuilder(
			this.uniformVariablesSpecifications,
			trianglesSelector,
		);
		return newProgramWrapperBuilder;
	}
	public constructor(uniformVariablesSpecifications: UniformVariablesSpecificationsToUse) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
	}
}
