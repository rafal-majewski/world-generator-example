import type {FragmentShaderSpecification} from "./FragmentShaderSpecification.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import type {VertexShaderSpecification} from "./VertexShaderSpecification.ts";
import {WithoutContextProgramWrapperCreator} from "./WithoutContextProgramWrapperCreator.ts";
export class WithSpecifiedFragmentShaderProgramWrapperCreatorBuilder<
	Scene,
	Vertex,
	UniformsSpecifications extends VariablesSpecifications<Scene>,
	AttributesSpecifications extends VariablesSpecifications<Vertex>,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
> {
	private readonly uniformsSpecifications: UniformsSpecifications;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly attributesSpecifications: AttributesSpecifications;
	private readonly vertexShaderSpecification: VertexShaderSpecification;
	private readonly fragmentShaderSpecification: FragmentShaderSpecification;
	public constructor(
		uniformsSpecifications: UniformsSpecifications,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributesSpecifications: AttributesSpecifications,
		vertexShaderSpecification: VertexShaderSpecification,
		fragmentShaderSpecification: FragmentShaderSpecification,
	) {
		this.uniformsSpecifications = uniformsSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributesSpecifications = attributesSpecifications;
		this.vertexShaderSpecification = vertexShaderSpecification;
		this.fragmentShaderSpecification = fragmentShaderSpecification;
	}
	public build(): WithoutContextProgramWrapperCreator<
		Scene,
		Vertex,
		UniformsSpecifications,
		AttributesSpecifications,
		VaryingsDeclarations,
		OutputsDeclarations
	> {
		const creator = new WithoutContextProgramWrapperCreator(
			this.uniformsSpecifications,
			this.trianglesSelector,
			this.attributesSpecifications,
			this.vertexShaderSpecification,
			this.fragmentShaderSpecification,
		);
		return creator;
	}
}
