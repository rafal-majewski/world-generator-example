import {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {AssignmentVertexShaderSourceCodeMainStatements} from "./AssignmentVertexShaderSourceCodeMainStatements.ts";
import {IfVertexShaderSourceCodeMainStatements} from "./IfVertexShaderSourceCodeMainStatements.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreator} from "./VertexShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {VertexShaderSourceCodeMainVariableValueCreator} from "./VertexShaderSourceCodeMainVariableValueCreator.ts";
import {WithFinalAssignmentVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalAssignmentVertexShaderSourceCodeMainStatementsBuilder.ts";
import {WithFinalIfVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalIfVertexShaderSourceCodeMainStatementsBuilder.ts";
import {literals} from "./literals.ts";

import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import {WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder.ts";
import type {VertexShaderSourceCodeMainConditionValueCreator} from "./VertexShaderSourceCodeMainConditionValueCreator.ts";
export class VertexShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	AttributeVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
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
		const statements = new FinalAssignmentsVertexShaderSourceCodeMainStatements(assignments);
		const newBuilder = new WithFinalFinalAssignmentsVertexShaderSourceCodeMainStatementsBuilder(
			statements,
		);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
	}
	public defineVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
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
		const value = valueCreator({
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
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: value.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const statements = new AssignmentVertexShaderSourceCodeMainStatements(name, value);
		const newBuilder = new WithFinalAssignmentVertexShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			newLocalVariablesDeclarations,
			statements,
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
		const statements = new IfVertexShaderSourceCodeMainStatements(conditionValue);
		const newBuilder = new WithFinalIfVertexShaderSourceCodeMainStatementsBuilder<
			UniformVariablesDeclarationsToUse,
			AttributeVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			LocalVariablesDeclarationsToUse
		>(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.localVariablesDeclarations,
			statements,
		);
		return newBuilder;
	}
}
