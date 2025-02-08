import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderMainSpecificationFinalAssignments} from "./VertexShaderMainSpecificationFinalAssignments.ts";
import type {WithFinalAssignmentsVertexShaderMainSpecificationStatements} from "./WithFinalAssignmentsVertexShaderMainSpecificationStatements.ts";
export class FinalAssignmentsVertexShaderMainSpecificationStatements
	implements WithFinalAssignmentsVertexShaderMainSpecificationStatements
{
	public constructor(
		assignments: VertexShaderMainSpecificationFinalAssignments<VariablesDeclarations>,
	) {
		this.assignments = assignments;
	}
	private readonly assignments: VertexShaderMainSpecificationFinalAssignments<VariablesDeclarations>;
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
