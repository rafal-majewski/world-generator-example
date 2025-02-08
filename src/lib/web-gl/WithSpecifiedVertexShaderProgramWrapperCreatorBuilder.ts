import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import type {VertexShaderSpecification} from "./VertexShaderSpecification.ts";
import {WithDeclaredOutputsProgramWrapperCreatorBuilder} from "./WithDeclaredOutputsProgramWrapperCreatorBuilder.ts";
export class WithSpecifiedVertexShaderProgramWrapperCreatorBuilder<
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
	private readonly vertexShaderSpecification: VertexShaderSpecification;
	public constructor(
		uniformsSpecifications: UniformsSpecifications,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributesSpecifications: AttributesSpecifications,
		varyingsDeclarations: VaryingsDeclarations,
		vertexShaderSpecification: VertexShaderSpecification,
	) {
		this.uniformsSpecifications = uniformsSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributesSpecifications = attributesSpecifications;
		this.varyingsDeclarations = varyingsDeclarations;
		this.vertexShaderSpecification = vertexShaderSpecification;
	}
	public declareOutputs<OutputsDeclarations extends VariablesDeclarations>(
		outputsDeclarations: OutputsDeclarations,
	): WithDeclaredOutputsProgramWrapperCreatorBuilder<
		Scene,
		Vertex,
		UniformsSpecifications,
		AttributesSpecifications,
		VaryingsDeclarations,
		OutputsDeclarations
	> {
		const newBuilder = new WithDeclaredOutputsProgramWrapperCreatorBuilder<
			Scene,
			Vertex,
			UniformsSpecifications,
			AttributesSpecifications,
			VaryingsDeclarations,
			OutputsDeclarations
		>(
			this.uniformsSpecifications,
			this.trianglesSelector,
			this.attributesSpecifications,
			this.varyingsDeclarations,
			outputsDeclarations,
			this.vertexShaderSpecification,
		);
		return newBuilder;
	}
}
