import type {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import type {AssignmentFragmentShaderSourceCodeMainStatements} from "./AssignmentFragmentShaderSourceCodeMainStatements.ts";
import type {IfFragmentShaderSourceCodeMainStatements} from "./IfFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import type {WithFinalIfFragmentShaderSourceCodeMainStatements} from "./WithFinalIfFragmentShaderSourceCodeMainStatements.ts";
export interface WithFinalAssignmentFragmentShaderSourceCodeMainStatements {
	pushIf(
		if_: IfFragmentShaderSourceCodeMainStatements,
	): WithFinalIfFragmentShaderSourceCodeMainStatements;
	pushAssignment(
		assignment: AssignmentFragmentShaderSourceCodeMainStatements,
	): WithFinalAssignmentFragmentShaderSourceCodeMainStatements;
	pushFinalAssignments(
		finalAssignments: FinalAssignmentsFragmentShaderSourceCodeMainStatements,
	): WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatements;
}
