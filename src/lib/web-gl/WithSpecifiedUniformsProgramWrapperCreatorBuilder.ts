import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import {WithSpecifiedTrianglesSelectorProgramWrapperCreatorBuilder} from "./WithSpecifiedTrianglesSelectorProgramWrapperCreatorBuilder.ts";
export class WithSpecifiedUniformsProgramWrapperCreatorBuilder<
	Scene,
	Vertex,
	UniformsSpecifications extends VariablesSpecifications<Scene>,
> {
	private readonly uniformsSpecifications: UniformsSpecifications;
	public specifyTrianglesSelector(
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
	): WithSpecifiedTrianglesSelectorProgramWrapperCreatorBuilder<
		Scene,
		Vertex,
		UniformsSpecifications
	> {
		const newBuilder = new WithSpecifiedTrianglesSelectorProgramWrapperCreatorBuilder(
			this.uniformsSpecifications,
			trianglesSelector,
		);
		return newBuilder;
	}
	public constructor(uniformsSpecifications: UniformsSpecifications) {
		this.uniformsSpecifications = uniformsSpecifications;
	}
}
