import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignments} from "./VertexShaderSourceCodeMainFinalAssignments.ts";
import type {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
export class FinalAssignmentsVertexShaderSourceCodeMainStatements
	implements WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements
{
	public constructor(
		assignments: VertexShaderSourceCodeMainFinalAssignments<VariablesDeclarations>,
	) {
		this.assignments = assignments;
	}
	private readonly assignments: VertexShaderSourceCodeMainFinalAssignments<VariablesDeclarations>;
	public stringify(indentationLevel: number): string {
		const identation = "\t".repeat(indentationLevel);
		const stringifiedOutsAssignments = Object.entries(this.assignments.outs)
			.map(([identifier, value]) => {
				const stringifiedValue = value.stringify();
				return `${identation}v_${identifier} = ${stringifiedValue};`;
			})
			.join("\n");
		const stringifiedGlPositionValue = this.assignments.gl_Position.stringify();
		const stringifiedGlPositionAssignment = `${identation}gl_Position = ${stringifiedGlPositionValue};`;
		return `${stringifiedOutsAssignments}
${stringifiedGlPositionAssignment}`;
	}
}
