import {ElseVertexShaderSourceCodeMainStatements} from "./ElseVertexShaderSourceCodeMainStatements.ts";
import type {FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCodeMainStatementsBuilder} from "./VertexShaderSourceCodeMainStatementsBuilder.ts";
import {WithFinalElseVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalElseStatementVertexShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalThenVertexShaderSourceCodeMainStatements} from "./WithFinalThenVertexShaderSourceCodeMainStatements.ts";
export class WithFinalThenVertexShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalThenVertexShaderSourceCodeMainStatements;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalThenVertexShaderSourceCodeMainStatements,
	) {
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public else_(
		bodyBuilderCreator: FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalElseVertexShaderSourceCodeMainStatementsBuilder {
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
		const else_ = new ElseVertexShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushElse(else_);
		const newBuilder = new WithFinalElseVertexShaderSourceCodeMainStatementsBuilder(newStatements);
		return newBuilder;
	}
}
