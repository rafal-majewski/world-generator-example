import type {FinalizedVertexShaderSourceCodeMainBuilder} from "./FinalizedVertexShaderSourceCodeMainBuilder.ts";
import {VertexShaderSourceCodeMain} from "./VertexShaderSourceCodeMain.ts";
import type {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
export class WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder
	implements FinalizedVertexShaderSourceCodeMainBuilder
{
	private readonly statements: WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): VertexShaderSourceCodeMain {
		const specification = new VertexShaderSourceCodeMain(this.statements);
		return specification;
	}
}
