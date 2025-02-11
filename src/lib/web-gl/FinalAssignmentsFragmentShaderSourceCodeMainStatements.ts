import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignments} from "./FragmentShaderSourceCodeMainFinalAssignments.ts";
import type {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
export class FinalAssignmentsFragmentShaderSourceCodeMainStatements
	implements WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements
{
	public constructor(
		assignments: FragmentShaderSourceCodeMainFinalAssignments<VariablesDeclarations>,
	) {
		this.assignments = assignments;
	}
	private readonly assignments: FragmentShaderSourceCodeMainFinalAssignments<VariablesDeclarations>;
	public stringify(indentationLevel: number): string {
		const identation = "\t".repeat(indentationLevel);
		const stringifiedOutsAssignments = Object.entries(this.assignments.outs)
			.map(([identifier, value]) => {
				const stringifiedValue = value.stringify();
				return `${identation}o_${identifier} = ${stringifiedValue};`;
			})
			.join("\n");
		return stringifiedOutsAssignments;
	}
}
