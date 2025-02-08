import type {FinalizedVertexShaderMainSpecificationStatements} from "./FinalizedVertexShaderMainSpecificationStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {WithFinalElseVertexShaderMainSpecificationStatements} from "./WithFinalElseVertexShaderMainSpecificationStatements.ts";
export class IntermediateStartingWithAssignmentWithFinalElseVertexShaderMainSpecificationStatements
	implements WithFinalElseVertexShaderMainSpecificationStatements
{
	private readonly name: VariableName;
	private readonly value: Value;
	private readonly restStatements: FinalizedVertexShaderMainSpecificationStatements;
	public constructor(
		name: VariableName,
		value: Value,
		restStatements: FinalizedVertexShaderMainSpecificationStatements,
	) {
		this.name = name;
		this.value = value;
		this.restStatements = restStatements;
	}
	public stringify(indentationLevel: number): string {
		const indentation: string = "\t".repeat(indentationLevel);
		const stringifiedValue = this.value.stringify();
		const stringifiedRestStatements = this.restStatements.stringify(indentationLevel);
		return `${indentation}l_${this.name} = ${stringifiedValue};
${stringifiedRestStatements}`;
	}
}
