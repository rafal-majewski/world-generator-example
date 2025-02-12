import {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import {AssignmentFragmentShaderSourceCodeMainStatements} from "./AssignmentFragmentShaderSourceCodeMainStatements.ts";
import {IfFragmentShaderSourceCodeMainStatements} from "./IfFragmentShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreator} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {FragmentShaderSourceCodeMainVariableValueCreator} from "./FragmentShaderSourceCodeMainVariableValueCreator.ts";
import {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder.ts";
import type {WithFinalAssignmentFragmentShaderSourceCodeMainStatements} from "./WithFinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
import {WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder.ts";
import {literals} from "./literals.ts";

import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import type {FragmentShaderSourceCodeMainConditionValueCreator} from "./FragmentShaderSourceCodeMainConditionValueCreator.ts";
export class WithFinalAssignmentFragmentShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalAssignmentFragmentShaderSourceCodeMainStatements;
	public finalize(
		builder: FragmentShaderSourceCodeMainFinalAssignmentsCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder {
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
					Object.entries(this.varyingVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`v_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof VaryingVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[VaryingVariablesDeclarationsToUse[Name]]
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
		const finalStatements = new FinalAssignmentsFragmentShaderSourceCodeMainStatements(assignments);
		const newStatements = this.statements.pushFinalAssignments(finalStatements);
		const newBuilder = new WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder(
			newStatements,
		);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalAssignmentFragmentShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public defineLocalVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
		name: VariableNameToUse,
		valueCreator: FragmentShaderSourceCodeMainVariableValueCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse,
			ValueToUse
		>,
	): WithFinalAssignmentFragmentShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
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
					Object.entries(this.varyingVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`v_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof VaryingVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[VaryingVariablesDeclarationsToUse[Name]]
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
		const assignment = new AssignmentFragmentShaderSourceCodeMainStatements(name, assignmentValue);
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: assignmentValue.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const newStatements = this.statements.pushAssignment(assignment);
		const newBuilder = new WithFinalAssignmentFragmentShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			newLocalVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
	public if_(
		valueCreator: FragmentShaderSourceCodeMainConditionValueCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
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
					Object.entries(this.varyingVariablesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValue[type](`v_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof VaryingVariablesDeclarationsToUse]: InstanceType<
						(typeof variableTypeToVariableValue)[VaryingVariablesDeclarationsToUse[Name]]
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
		const if_ = new IfFragmentShaderSourceCodeMainStatements(conditionValue);
		const newStatements = this.statements.pushIf(if_);
		const newBuilder = new WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.localVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
}
