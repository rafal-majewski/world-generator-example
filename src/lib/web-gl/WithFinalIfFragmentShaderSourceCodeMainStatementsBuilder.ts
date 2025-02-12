import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator.ts";
import {ThenFragmentShaderSourceCodeMainStatements} from "./ThenFragmentShaderSourceCodeMainStatements.ts";
import {FragmentShaderSourceCodeMainStatementsBuilder} from "./FragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {WithFinalIfFragmentShaderSourceCodeMainStatements} from "./WithFinalIfFragmentShaderSourceCodeMainStatements.ts";
import {WithFinalThenFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalThenStatementFragmentShaderSourceCodeMainStatementsBuilder.ts";
export class WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalIfFragmentShaderSourceCodeMainStatements;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalIfFragmentShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public then_(
		bodyBuilderCreator: FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalThenFragmentShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	> {
		const builder = new FragmentShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.localVariablesDeclarations,
		);
		const body = bodyBuilderCreator(builder).build();
		const then_ = new ThenFragmentShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushThen(then_);
		const newBuilder = new WithFinalThenFragmentShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.localVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
}
