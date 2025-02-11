import type {BoolValue} from "./BoolValue.ts";
import {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import {FinalAssignmentFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
import {FinalIfFragmentShaderSourceCodeMainStatements} from "./FinalIfFragmentShaderSourceCodeMainStatements.ts";
import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreator} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {FragmentShaderSourceCodeMainVariableValueCreator} from "./FragmentShaderSourceCodeMainVariableValueCreator.ts";
import {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder.ts";
import type {WithFinalAssignmentFragmentShaderSourceCodeMainStatements} from "./WithFinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
import {WithFinalIfFragmentShaderSourceCodeMainBuilder} from "./WithFinalIfFragmentShaderSourceCodeMainBuilder.ts";
import {literals} from "./literals.ts";
import {operators} from "./operators.ts";
import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
export class WithFinalAssignmentFragmentShaderSourceCodeMainBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly customFunctions: CustomFunctions;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
	private readonly statements: WithFinalAssignmentFragmentShaderSourceCodeMainStatements;
	public finalize(
		builder: FragmentShaderSourceCodeMainFinalAssignmentsCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			OutputVariablesDeclarationsToUse,
			CustomFunctions,
			LocalVariablesDeclarationsToUse
		>,
	): WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder {
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
			operators,
			literals,
		});
		const finalStatements = new FinalAssignmentsFragmentShaderSourceCodeMainStatements(assignments);
		const newStatements = this.statements.pushAssignments(finalStatements);
		const newBuilder = new WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder(
			newStatements,
		);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		customFunctions: CustomFunctions,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
		statements: WithFinalAssignmentFragmentShaderSourceCodeMainStatements,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.customFunctions = customFunctions;
		this.localVariablesDeclarations = localVariablesDeclarations;
		this.statements = statements;
	}
	public defineLocalVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
		name: VariableNameToUse,
		valueCreator: FragmentShaderSourceCodeMainVariableValueCreator<
			UniformVariablesDeclarationsToUse,
			VaryingVariablesDeclarationsToUse,
			CustomFunctions,
			LocalVariablesDeclarationsToUse,
			ValueToUse
		>,
	): WithFinalAssignmentFragmentShaderSourceCodeMainBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
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
			operators,
			literals,
		});
		const assignment = new FinalAssignmentFragmentShaderSourceCodeMainStatements(
			name,
			assignmentValue,
		);
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: assignmentValue.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const newStatements = this.statements.pushAssignment(assignment);
		const newBuilder = new WithFinalAssignmentFragmentShaderSourceCodeMainBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.customFunctions,
			newLocalVariablesDeclarations,
			newStatements,
		);
		return newBuilder;
	}
	public if_(condition: BoolValue): WithFinalIfFragmentShaderSourceCodeMainBuilder {
		const if_ = new FinalIfFragmentShaderSourceCodeMainStatements(condition);
		const newStatements = this.statements.pushIf(if_);
		const newBuilder = new WithFinalIfFragmentShaderSourceCodeMainBuilder(newStatements);
		return newBuilder;
	}
}
