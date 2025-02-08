import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {FragmentShaderMainSpecificationFinalAssignments} from "./FragmentShaderMainSpecificationFinalAssignments.ts";
import type {FragmentShaderMainSpecificationStatements} from "./FragmentShaderMainSpecificationStatements.ts";
export class FragmentShaderMainSpecificationFinalStatement<
	OutputsDeclarations extends VariablesDeclarations,
> implements FragmentShaderMainSpecificationStatements
{
	public constructor(
		assignments: FragmentShaderMainSpecificationFinalAssignments<OutputsDeclarations>,
	) {
		this.assignments = assignments;
	}
	private readonly assignments: FragmentShaderMainSpecificationFinalAssignments<OutputsDeclarations>;
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
