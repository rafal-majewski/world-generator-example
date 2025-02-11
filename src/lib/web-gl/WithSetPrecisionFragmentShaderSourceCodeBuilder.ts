import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithSetMainFragmentShaderSourceCodeBuilder} from "./WithSetMainFragmentShaderSourceCodeBuilder.ts";
import type {CustomFunctions} from "./CustomFunctions.ts";
import type {VariableName} from "./VariableName.ts";
import type {CustomFunction} from "./CustomFunction.ts";
import {CustomFunctionDefinitionBuilder} from "./CustomFunctionDefinitionBuilder.ts";
import type {WithSetStatementsCustomFunctionDeclarationBuilderCreator} from "./WithSetStatementsCustomFunctionDeclarationBuilderCreator.ts";
import {FragmentShaderSourceCodeMainBuilder} from "./FragmentShaderSourceCodeMainBuilder.ts";
import type {FinalizedFragmentShaderSourceCodeMainBuilderCreator} from "./FinalizedFragmentShaderSourceCodeMainBuilderCreator.ts";
export class WithSetPrecisionFragmentShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctionsToUse extends CustomFunctions,
> {
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		outputVariablesDeclarations: OutputVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		precision: ShaderPrecision,
		customFunctions: CustomFunctionsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.outputVariablesDeclarations = outputVariablesDeclarations;
		this.precision = precision;
		this.customFunctions = customFunctions;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly outputVariablesDeclarations: OutputVariablesDeclarationsToUse;
	private readonly precision: ShaderPrecision;
	private readonly customFunctions: CustomFunctionsToUse;
	public defineFunction<NameToUse extends VariableName, CustomFunctionToUse extends CustomFunction>(
		creator: WithSetStatementsCustomFunctionDeclarationBuilderCreator<
			NameToUse,
			CustomFunctionToUse
		>,
	): WithSetPrecisionFragmentShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
		CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>
	> {
		const customFunctionDefinitionBuilder = new CustomFunctionDefinitionBuilder();
		const customFunctionDefinition = creator(customFunctionDefinitionBuilder).build();
		const newFunctions = {
			...this.customFunctions,
			[customFunctionDefinition.name]: customFunctionDefinition.function_,
		} as CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>;
		const newSourceCodeBuilder = new WithSetPrecisionFragmentShaderSourceCodeBuilder(
			this.uniformVariablesDeclarations,
			this.outputVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.precision,
			newFunctions,
		);
		return newSourceCodeBuilder;
	}
	public setMain(
		creator: FinalizedFragmentShaderSourceCodeMainBuilderCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			Readonly<{}>,
			Readonly<{}>
		>,
	): WithSetMainFragmentShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse
	> {
		const builder = new FragmentShaderSourceCodeMainBuilder<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			Readonly<{}>,
			Readonly<{}>
		>(this.uniformVariablesDeclarations, this.varyingVariablesDeclarations, {}, {});
		const main = creator(builder).build();
		const newSourceCodeBuilder = new WithSetMainFragmentShaderSourceCodeBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.outputVariablesDeclarations,
			this.precision,
			main,
		);
		return newSourceCodeBuilder;
	}
}
