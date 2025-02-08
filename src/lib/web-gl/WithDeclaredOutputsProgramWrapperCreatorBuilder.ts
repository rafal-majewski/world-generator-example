import type {ComputeVariablesDeclarationsFromVariablesSpecifications} from "./ComputeVariablesDeclarationsFromVariablesSpecifications.ts";
import {FragmentShaderSpecificationBuilder} from "./FragmentShaderSpecificationBuilder.ts";
import type {FragmentShaderSpecificationCreator} from "./FragmentShaderSpecificationCreator.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import type {VertexShaderSpecification} from "./VertexShaderSpecification.ts";
import {WithSpecifiedFragmentShaderProgramWrapperCreatorBuilder} from "./WithSpecifiedFragmentShaderProgramWrapperCreatorBuilder.ts";
export class WithDeclaredOutputsProgramWrapperCreatorBuilder<
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
	private readonly varyingsDeclarations: VaryingsDeclarations;
	private readonly outputsDeclarations: OutputsDeclarations;
	private readonly vertexShaderSpecification: VertexShaderSpecification;
	public constructor(
		uniformsSpecifications: UniformsSpecifications,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributesSpecifications: AttributesSpecifications,
		varyingsDeclarations: VaryingsDeclarations,
		outputsDeclarations: OutputsDeclarations,
		vertexShaderSpecification: VertexShaderSpecification,
	) {
		this.uniformsSpecifications = uniformsSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributesSpecifications = attributesSpecifications;
		this.varyingsDeclarations = varyingsDeclarations;
		this.outputsDeclarations = outputsDeclarations;
		this.vertexShaderSpecification = vertexShaderSpecification;
	}
	public specifyFragmentShader(
		creator: FragmentShaderSpecificationCreator<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformsSpecifications>,
			VaryingsDeclarations,
			OutputsDeclarations
		>,
	): WithSpecifiedFragmentShaderProgramWrapperCreatorBuilder<
		Scene,
		Vertex,
		UniformsSpecifications,
		AttributesSpecifications,
		VaryingsDeclarations,
		OutputsDeclarations
	> {
		const specificationBuilder = new FragmentShaderSpecificationBuilder<
			ComputeVariablesDeclarationsFromVariablesSpecifications<UniformsSpecifications>,
			VaryingsDeclarations,
			OutputsDeclarations
		>(
			Object.fromEntries(
				Object.entries(this.uniformsSpecifications).map(([name, specification]) => [
					name,
					specification.type,
				]),
			) as unknown as Readonly<{
				[Name in keyof UniformsSpecifications]: UniformsSpecifications[Name]["type"];
			}>,
			this.varyingsDeclarations,
			this.outputsDeclarations,
		);
		const specification = creator(specificationBuilder);
		const newCreatorBuilder = new WithSpecifiedFragmentShaderProgramWrapperCreatorBuilder<
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
			this.vertexShaderSpecification,
			specification,
		);
		return newCreatorBuilder;
	}
}
