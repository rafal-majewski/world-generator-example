import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypes} from "./variableTypes.ts";
import type {VaryingVariablesDeclarationsCreator} from "./VaryingVariablesDeclarationsCreator.ts";
import {WithDeclaredVaryingsProgramWrapperBuilder} from "./WithDeclaredVaryingsProgramWrapperBuilder.ts";
export class WithSpecifiedAttributesProgramWrapperBuilder<
	Scene,
	Vertex,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
	AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Vertex>,
> {
	private readonly uniformVariablesSpecifications: UniformVariablesSpecificationsToUse;
	private readonly attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse;
	public constructor(
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse,
	) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributeVariablesSpecifications = attributeVariablesSpecifications;
	}
	public declareVaryings<VaryingVariablesDeclarationsToUse extends VariablesDeclarations>(
		builder: VaryingVariablesDeclarationsCreator<VaryingVariablesDeclarationsToUse>,
	): WithDeclaredVaryingsProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse,
		AttributeVariablesSpecificationsToUse,
		VaryingVariablesDeclarationsToUse
	> {
		const varyingVariablesDeclarations = builder(variableTypes);
		const newProgramWrapperBuilder = new WithDeclaredVaryingsProgramWrapperBuilder<
			Scene,
			Vertex,
			UniformVariablesSpecificationsToUse,
			AttributeVariablesSpecificationsToUse,
			VaryingVariablesDeclarationsToUse
		>(
			this.uniformVariablesSpecifications,
			this.trianglesSelector,
			this.attributeVariablesSpecifications,
			varyingVariablesDeclarations,
		);
		return newProgramWrapperBuilder;
	}
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
}
