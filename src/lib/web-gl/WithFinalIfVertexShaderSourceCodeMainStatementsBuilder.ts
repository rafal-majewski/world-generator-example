import type {FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator} from "./FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator.ts";
import {ThenVertexShaderSourceCodeMainStatements} from "./ThenVertexShaderSourceCodeMainStatements.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {VertexShaderSourceCodeMainStatementsBuilder} from "./VertexShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
import {WithFinalThenVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalThenStatementVertexShaderSourceCodeMainStatementsBuilder.ts";
export class WithFinalIfVertexShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalIfVertexShaderSourceCodeMainStatements;
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalIfVertexShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public then_(
		bodyBuilderCreator: FinalizedVertexShaderSourceCodeMainStatementsBuilderCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			Readonly<{}>
		>,
	): WithFinalThenVertexShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	> {
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
		const then_ = new ThenVertexShaderSourceCodeMainStatements(body);
		const newStatements = this.statements.pushThen(then_);
		const newBuilder = new WithFinalThenVertexShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.localVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
}
