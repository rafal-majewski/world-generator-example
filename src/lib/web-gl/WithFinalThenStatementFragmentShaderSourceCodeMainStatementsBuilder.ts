import {FinalElseFragmentShaderSourceCodeMainStatements} from "./FinalElseFragmentShaderSourceCodeMainStatements.ts";
import type {FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCodeMainStatementsBuilder} from "./VertexShaderSourceCodeMainStatementsBuilder.ts";
import {WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalElseStatementFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalThenFragmentShaderSourceCodeMainStatements} from "./WithFinalThenFragmentShaderSourceCodeMainStatements.ts";
export class WithFinalThenFragmentShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalThenFragmentShaderSourceCodeMainStatements;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalThenFragmentShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public else_(
		bodyBuilderCreator: FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>
		>,
	): WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder {
		const builder = new VertexShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.localVariablesDeclarations,
		);
		const body = bodyBuilderCreator(builder).build();
		const else_ = new FinalElseFragmentShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushElse(else_);
		const newBuilder = new WithFinalElseFragmentShaderSourceCodeMainStatementsBuilder(
			newStatements,
		);
		return newBuilder;
	}
}
