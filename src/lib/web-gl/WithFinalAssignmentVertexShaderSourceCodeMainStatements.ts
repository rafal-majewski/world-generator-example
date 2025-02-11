import type {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {FinalAssignmentVertexShaderSourceCodeMainStatements} from "./FinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import type {FinalIfVertexShaderSourceCodeMainStatements} from "./FinalIfVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import type {WithFinalIfVertexShaderSourceCodeMainStatements} from "./WithFinalIfVertexShaderSourceCodeMainStatements.ts";
export interface WithFinalAssignmentVertexShaderSourceCodeMainStatements {
	pushIf(
		if_: FinalIfVertexShaderSourceCodeMainStatements,
	): WithFinalIfVertexShaderSourceCodeMainStatements;
	pushAssignment(
		assignment: FinalAssignmentVertexShaderSourceCodeMainStatements,
	): WithFinalAssignmentVertexShaderSourceCodeMainStatements;
	pushAssignments(
		assignments: FinalAssignmentsVertexShaderSourceCodeMainStatements,
	): WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatements;
}
