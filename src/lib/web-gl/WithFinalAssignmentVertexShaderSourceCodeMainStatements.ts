import type {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {AssignmentVertexShaderSourceCodeMainStatements} from "./AssignmentVertexShaderSourceCodeMainStatements.ts";
import type {IfVertexShaderSourceCodeMainStatements} from "./IfVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
export interface WithFinalAssignmentVertexShaderSourceCodeMainStatements {
	pushIf(
		if_: IfVertexShaderSourceCodeMainStatements,
	): WithFinalIfVertexShaderSourceCodeMainStatements;
	pushAssignment(
		assignment: AssignmentVertexShaderSourceCodeMainStatements,
	): WithFinalAssignmentVertexShaderSourceCodeMainStatements;
	pushFinalAssignments(
		finalAssignments: FinalAssignmentsVertexShaderSourceCodeMainStatements,
	): WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements;
}
