import {ElseFragmentShaderSourceCodeMainStatements} from "./ElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator.ts";
import {FragmentShaderSourceCodeMainStatementsBuilder} from "./FragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalElseStatementFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalThenFragmentShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalThenFragmentShaderSourceCodeMainStatements;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalThenFragmentShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public else_(
		bodyBuilderCreator: FinalizedFragmentShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder {
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
		const else_ = new ElseFragmentShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushElse(else_);
		const newBuilder = new WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder(
			newStatements,
		);
		return newBuilder;
	}
}
