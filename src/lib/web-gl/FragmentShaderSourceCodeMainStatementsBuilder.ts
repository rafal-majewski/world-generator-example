import type {BoolValue} from "./BoolValue.ts";
import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import {FinalAssignmentFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
import {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import {FinalIfFragmentShaderSourceCodeMainStatements} from "./FinalIfFragmentShaderSourceCodeMainStatements.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreator} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {FragmentShaderSourceCodeMainVariableValueCreator} from "./FragmentShaderSourceCodeMainVariableValueCreator.ts";
import {literals} from "./literals.ts";
import {operators} from "./operators.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import {WithFinalAssignmentFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalAssignmentFragmentShaderSourceCodeMainStatementsBuilder.ts";
import {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder.ts";
import {WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder} from "./WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder.ts";
export class FragmentShaderSourceCodeMainStatementsBuilder<
	UniformVariablesDeclarationsToUse extends VariablesDeclarations,
	VaryingVariablesDeclarationsToUse extends VariablesDeclarations,
	OutputVariablesDeclarationsToUse extends VariablesDeclarations,
	LocalVariablesDeclarationsToUse extends VariablesDeclarations,
> {
	private readonly uniformVariablesDeclarations: UniformVariablesDeclarationsToUse;
	private readonly varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse;
	private readonly localVariablesDeclarations: LocalVariablesDeclarationsToUse;
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
			operators,
		});
		const statements = new FinalAssignmentsFragmentShaderSourceCodeMainStatements(assignments);
		const newBuilder = new WithFinalFinalAssignmentsFragmentShaderSourceCodeMainStatementsBuilder(
			statements,
		);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.localVariablesDeclarations = localVariablesDeclarations;
	}
	public defineVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
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
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: value.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const statements = new FinalAssignmentFragmentShaderSourceCodeMainStatements(name, value);
		const newBuilder = new WithFinalAssignmentFragmentShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			newLocalVariablesDeclarations,
			statements,
		);
		return newBuilder;
	}
	public if_(
		conditionValue: BoolValue,
	): WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder<
		UniformVariablesDeclarationsToUse,
		VaryingVariablesDeclarationsToUse,
		OutputVariablesDeclarationsToUse,
		LocalVariablesDeclarationsToUse
	> {
		const statements = new FinalIfFragmentShaderSourceCodeMainStatements(conditionValue);
		const newBuilder = new WithFinalIfFragmentShaderSourceCodeMainStatementsBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.localVariablesDeclarations,
			statements,
		);
		return newBuilder;
	}
}
