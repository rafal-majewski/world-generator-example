import type {BoolValue} from "./BoolValue.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter} from "./VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter.ts";
export type VertexShaderSourceCodeMainConditionValueCreator<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> = (
	identifiers: VertexShaderSourceCodeMainFinalAssignmentsCreatorIdentifiersParameter<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	>,
) => BoolValue;
