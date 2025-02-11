import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithSetMainFragmentShaderSourceCodeBuilder} from "./WithSetMainFragmentShaderSourceCodeBuilder.ts";
import {FragmentShaderSourceCodeMainStatementsBuilder} from "./FragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator.ts";
export class WithSetPrecisionFragmentShaderSourceCodeBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		outputVariablesDeclarations: OutputVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		precision: ShaderPrecision,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.outputVariablesDeclarations = outputVariablesDeclarations;
		this.precision = precision;
	}
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly outputVariablesDeclarations: OutputVariablesDeclarationsToUse;
	private readonly precision: ShaderPrecision;
	// public defineFunction<NameToUse extends VariableName, CustomFunctionToUse extends CustomFunction>(
	// 	creator: WithSetStatementsCustomFunctionDeclarationBuilderCreator<
	// 		NameToUse,
	// 		CustomFunctionToUse
	// 	>,
	// ): WithSetPrecisionFragmentShaderSourceCodeBuilder<
	// 	UniformVariablesDeclarationsToUse,
	// 	VaryingVariablesDeclarationsToUse,
	// 	OutputVariablesDeclarationsToUse,
	// 	CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>
	// > {
	// 	const customFunctionDefinitionBuilder = new CustomFunctionDefinitionBuilder();
	// 	const customFunctionDefinition = creator(customFunctionDefinitionBuilder).build();
	// 	const newFunctions = {
	// 		...this.customFunctions,
	// 		[customFunctionDefinition.name]: customFunctionDefinition.function_,
	// 	} as CustomFunctionsToUse & Readonly<Record<NameToUse, CustomFunctionToUse>>;
	// 	const newSourceCodeBuilder = new WithSetPrecisionFragmentShaderSourceCodeBuilder(
	// 		this.uniformVariablesDeclarations,
	// 		this.outputVariablesDeclarations,
	// 		this.varyingVariablesDeclarations,
	// 		this.precision,
	// 		newFunctions,
	// 	);
	// 	return newSourceCodeBuilder;
	// }
	public setMain(
		creator: FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			Readonly<{}>
		>,
	): WithSetMainFragmentShaderSourceCodeBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse
	> {
		const builder = new FragmentShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			Readonly<{}>
		>(this.uniformVariablesDeclarations, this.varyingVariablesDeclarations, {});
		const body = creator(builder).build();
		const newSourceCodeBuilder = new WithSetMainFragmentShaderSourceCodeBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.outputVariablesDeclarations,
			this.precision,
			body,
		);
		return newSourceCodeBuilder;
	}
}
