import type {FinalizedVertexShaderSourceCodeMainBuilder} from "./FinalizedVertexShaderSourceCodeMainBuilder.ts";
import {VertexShaderSourceCodeMain} from "./VertexShaderSourceCodeMain.ts";
import type {WithFinalElseVertexShaderSourceCodeMainStatements} from "./WithFinalElseVertexShaderSourceCodeMainStatements.ts";
export class WithFinalElseVertexShaderSourceCodeMainBuilder
	implements FinalizedVertexShaderSourceCodeMainBuilder
{
	private readonly statements: WithFinalElseVertexShaderSourceCodeMainStatements;
	public constructor(statements: WithFinalElseVertexShaderSourceCodeMainStatements) {
		this.statements = statements;
	}
	public build(): VertexShaderSourceCodeMain {
		const specification = new VertexShaderSourceCodeMain(this.statements);
		return specification;
	}
}
