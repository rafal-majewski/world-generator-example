import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderSourceCodeMainFinalAssignments} from "./FragmentShaderSourceCodeMainFinalAssignments.ts";
import type {FragmentShaderSourceCodeMainStatements} from "./FragmentShaderSourceCodeMainStatements.ts";
export class FragmentShaderSourceCodeMainFinalStatement<
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
> implements FragmentShaderSourceCodeMainStatements
{
	public constructor(
		assignments: FragmentShaderSourceCodeMainFinalAssignments<OutputVariablesDeclarationsToUse>,
	) {
		this.assignments = assignments;
	}
	private readonly assignments: FragmentShaderSourceCodeMainFinalAssignments<OutputVariablesDeclarationsToUse>;
	public stringify(indentationLevel: number): string {
		const stringifiedAssignments = Object.entries(this.assignments.outs)
			.map(([identifier, value]) => {
				const identation = "\t".repeat(indentationLevel);
				const stringifiedValue = value.stringify();
				return `${identation}o_${identifier} = ${stringifiedValue};`;
			})
			.join("\n");
		return stringifiedAssignments;
	}
}
