import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCodeMainBuilder} from "./VertexShaderSourceCodeMainBuilder.ts";
import type {FinalizedVertexShaderSourceCodeMainBuilderCreator} from "./FinalizedVertexShaderSourceCodeMainBuilderCreator.ts";
import {WithSetMainVertexShaderSourceCodeBuilder} from "./WithSetMainVertexShaderSourceCodeBuilder.ts";
import type {CustomFunctions} from "./CustomFunctions.ts";
import type {VariableName} from "./VariableName.ts";
import type {CustomFunction} from "./CustomFunction.ts";
import {CustomFunctionDefinitionBuilder} from "./CustomFunctionDefinitionBuilder.ts";
import type {WithSetStatementsCustomFunctionDeclarationBuilderCreator} from "./WithSetStatementsCustomFunctionDeclarationBuilderCreator.ts";
export class WithSetPrecisionVertexShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctionsToUse extends CustomFunctions,
> {
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		precision: ShaderPrecision,
		customFunctions: CustomFunctionsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.precision = precision;
		this.customFunctions = customFunctions;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly precision: ShaderPrecision;
	private readonly customFunctions: CustomFunctionsToUse;
	public defineFunction<NameToUse extends VariableName, CustomFunctionToUse extends CustomFunction>(
		creator: WithSetStatementsCustomFunctionDeclarationBuilderCreator<
			NameToUse,
			CustomFunctionToUse
		>,
	): WithSetPrecisionVertexShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>
	> {
		const customFunctionDefinitionBuilder = new CustomFunctionDefinitionBuilder();
		const customFunctionDefinition = creator(customFunctionDefinitionBuilder).build();
		const newFunctions = {
			...this.customFunctions,
			[customFunctionDefinition.name]: customFunctionDefinition.function_,
		} as CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>;
		const newSourceCodeBuilder = new WithSetPrecisionVertexShaderSourceCodeBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.precision,
			newFunctions,
		);
		return newSourceCodeBuilder;
	}
	public setMain(
		creator: FinalizedVertexShaderSourceCodeMainBuilderCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>,
			Readonly<{}>
		>,
	): WithSetMainVertexShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse
	> {
		const builder = new VertexShaderSourceCodeMainBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>,
			Readonly<{}>
		>(this.uniformVariablesDeclarations, this.attributeVariablesDeclarations, {}, {});
		const main = creator(builder).build();
		const newSourceCodeBuilder = new WithSetMainVertexShaderSourceCodeBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.precision,
			main,
		);
		return newSourceCodeBuilder;
	}
}
