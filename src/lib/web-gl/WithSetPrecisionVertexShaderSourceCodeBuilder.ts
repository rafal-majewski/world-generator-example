import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCodeMainStatementsBuilder} from "./VertexShaderSourceCodeMainStatementsBuilder.ts";
import type {FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator.ts";
import {WithSetMainVertexShaderSourceCodeBuilder} from "./WithSetMainVertexShaderSourceCodeBuilder.ts";
export class WithSetPrecisionVertexShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		precision: ShaderPrecision,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.precision = precision;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly precision: ShaderPrecision;
	// public defineFunction<NameToUse extends VariableName, CustomFunctionToUse extends CustomFunction>(
	// 	creator: WithSetStatementsCustomFunctionDeclarationBuilderCreator<
	// 		NameToUse,
	// 		CustomFunctionToUse
	// 	>,
	// ): WithSetPrecisionVertexShaderSourceCodeBuilder<
	// 	UniformVariablesDeclarationsToUse,
	// 	AttributeVariablesDeclarationsToUse,
	// 	VaryingVariablesDeclarationsToUse,
	// 	CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>
	// > {
	// 	const customFunctionDefinitionBuilder = new CustomFunctionDefinitionBuilder();
	// 	const customFunctionDefinition = creator(customFunctionDefinitionBuilder).build();
	// 	const newFunctions = {
	// 		...this.customFunctions,
	// 		[customFunctionDefinition.name]: customFunctionDefinition.function_,
	// 	} as CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>;
	// 	const newSourceCodeBuilder = new WithSetPrecisionVertexShaderSourceCodeBuilder(
	// 		this.uniformVariablesDeclarations,
	// 		this.attributeVariablesDeclarations,
	// 		this.varyingVariablesDeclarations,
	// 		this.precision,
	// 		newFunctions,
	// 	);
	// 	return newSourceCodeBuilder;
	// }
	public setMain(
		bodyBuilderCreator: FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>
		>,
	): WithSetMainVertexShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse
	> {
		const builder = new VertexShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>
		>(this.uniformVariablesDeclarations, this.attributeVariablesDeclarations, {});
		const body = bodyBuilderCreator(builder).build();
		const newSourceCodeBuilder = new WithSetMainVertexShaderSourceCodeBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.precision,
			body,
		);
		return newSourceCodeBuilder;
	}
}
