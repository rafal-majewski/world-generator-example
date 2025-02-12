import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {AssignmentVertexShaderSourceCodeMainStatements} from "./AssignmentVertexShaderSourceCodeMainStatements.ts";
import {IfVertexShaderSourceCodeMainStatements} from "./IfVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreator} from "./VertexShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {VertexShaderSourceCodeMainVariableValueCreator} from "./VertexShaderSourceCodeMainVariableValueCreator.ts";
import {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalAssignmentVertexShaderSourceCodeMainStatements} from "./WithFinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import {WithFinalIfVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalIfVertexShaderSourceCodeMainStatementsBuilder.ts";
import {literals} from "./literals.ts";

import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import type {VertexShaderSourceCodeMainConditionValueCreator} from "./VertexShaderSourceCodeMainConditionValueCreator.ts";
export class WithFinalAssignmentVertexShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalAssignmentVertexShaderSourceCodeMainStatements;
	public finalize(
		builder: VertexShaderSourceCodeMainFinalAssignmentsCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder {
		const assignments = builder({
			functionCalls: {
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

			literals,
		});
		const finalStatements = new FinalAssignmentsVertexShaderSourceCodeMainStatements(assignments);
		const newStatements = this.statements.pushFinalAssignments(finalStatements);
		const newBuilder = new WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder(
			newStatements,
		);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalAssignmentVertexShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public defineLocalVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
		name: VariableNameToUse,
		valueCreator: VertexShaderSourceCodeMainVariableValueCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse,
			ValueToUse
		>,
	): WithFinalAssignmentVertexShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse["type"]>>
	> {
		const assignmentValue = valueCreator({
			functionCalls: {
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

			literals,
		});
		const assignment = new AssignmentVertexShaderSourceCodeMainStatements(name, assignmentValue);
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: assignmentValue.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const newStatements = this.statements.pushAssignment(assignment);
		const newBuilder = new WithFinalAssignmentVertexShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			newLocalVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
	public if_(
		valueCreator: VertexShaderSourceCodeMainConditionValueCreator<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalIfVertexShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		AttributeVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	> {
		const conditionValue = valueCreator({
			functionCalls: {
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

			literals,
		});
		const if_ = new IfVertexShaderSourceCodeMainStatements(conditionValue);
		const newStatements = this.statements.pushIf(if_);
		const newBuilder = new WithFinalIfVertexShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.localVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
}
