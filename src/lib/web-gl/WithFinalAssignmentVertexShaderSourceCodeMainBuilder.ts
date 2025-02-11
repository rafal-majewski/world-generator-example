import type {BoolValue} from "./BoolValue.ts";
import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {FinalAssignmentVertexShaderSourceCodeMainStatements} from "./FinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import {FinalIfVertexShaderSourceCodeMainStatements} from "./FinalIfVertexShaderSourceCodeMainStatements.ts";
import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreator} from "./VertexShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {VertexShaderSourceCodeMainVariableValueCreator} from "./VertexShaderSourceCodeMainVariableValueCreator.ts";
import {WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder.ts";
import type {WithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./WithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import {WithFinalIfVertexShaderSourceCodeMainBuilder} from "./WithFinalIfVertexShaderSourceCodeMainBuilder.ts";
import {literals} from "./literals.ts";
import {operators} from "./operators.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
export class WithFinalAssignmentVertexShaderSourceCodeMainBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly customFunctions: CustomFunctions;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalAssignmentVertexShaderSourceCodeMainStatements;
	public finalize(
		builder: VertexShaderSourceCodeMainFinalAssignmentsCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			CustomFunctions,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder {
		const assignments = builder({
			functionCalls: {
				custom: this.customFunctions,
				builtIn: builtInFunctionCalls,
			},
			variables: {
				uniforms: Object.fromEntries(
					Object.entries(this.uniformVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`u_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof UniformVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[UniformVariablesDeclarationsToUse[Name]]
					>;
				}>,
				ins: Object.fromEntries(
					Object.entries(this.attributeVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`a_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof AttributeVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[AttributeVariablesDeclarationsToUse[Name]]
					>;
				}>,
				locals: Object.fromEntries(
					Object.entries(this.localVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`l_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof LocalVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[LocalVariablesDeclarationsToUse[Name]]
					>;
				}>,
			},
			operators,
			literals,
		});
		const finalStatements = new FinalAssignmentsVertexShaderSourceCodeMainStatements(assignments);
		const newStatements = this.statements.pushAssignments(finalStatements);
		const newBuilder = new WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder(
			newStatements,
		);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		customFunctions: CustomFunctions,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalAssignmentVertexShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.customFunctions = customFunctions;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public defineLocalVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
		name: VariableNameToUse,
		valueCreator: VertexShaderSourceCodeMainVariableValueCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			CustomFunctions,
			LocalVariablesDeclarationsToUse,
			ValueToUse
		>,
	): WithFinalAssignmentVertexShaderSourceCodeMainBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		CustomFunctions,
		LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse["type"]>>
	> {
		const assignmentValue = valueCreator({
			functionCalls: {
				custom: this.customFunctions,
				builtIn: builtInFunctionCalls,
			},
			variables: {
				uniforms: Object.fromEntries(
					Object.entries(this.uniformVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`u_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof UniformVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[UniformVariablesDeclarationsToUse[Name]]
					>;
				}>,
				ins: Object.fromEntries(
					Object.entries(this.attributeVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`a_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof AttributeVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[AttributeVariablesDeclarationsToUse[Name]]
					>;
				}>,
				locals: Object.fromEntries(
					Object.entries(this.localVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`l_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof LocalVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[LocalVariablesDeclarationsToUse[Name]]
					>;
				}>,
			},
			operators,
			literals,
		});
		const assignment = new FinalAssignmentVertexShaderSourceCodeMainStatements(
			name,
			assignmentValue,
		);
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: assignmentValue.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const newStatements = this.statements.pushAssignment(assignment);
		const newBuilder = new WithFinalAssignmentVertexShaderSourceCodeMainBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.customFunctions,
			newLocalVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
	public if_(condition: BoolValue): WithFinalIfVertexShaderSourceCodeMainBuilder {
		const if_ = new FinalIfVertexShaderSourceCodeMainStatements(condition);
		const newStatements = this.statements.pushIf(if_);
		const newBuilder = new WithFinalIfVertexShaderSourceCodeMainBuilder(newStatements);
		return newBuilder;
	}
}
