import type {BoolValue} from "./BoolValue.ts";
import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
import {FinalAssignmentFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentFragmentShaderSourceCodeMainStatements.ts";
import {FinalAssignmentsFragmentShaderSourceCodeMainStatements} from "./FinalAssignmentsFragmentShaderSourceCodeMainStatements.ts";
import {FinalIfFragmentShaderSourceCodeMainStatements} from "./FinalIfFragmentShaderSourceCodeMainStatements.ts";
import type {FragmentShaderSourceCodeMainFinalAssignmentsCreator} from "./FragmentShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {FragmentShaderSourceCodeMainVariableValueCreator} from "./FragmentShaderSourceCodeMainVariableValueCreator.ts";
import type {Functions} from "./Functions.ts";
import {literals} from "./literals.ts";
import {operators} from "./operators.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import {WithFinalAssignmentFragmentShaderSourceCodeMainBuilder} from "./WithFinalAssignmentFragmentShaderSourceCodeMainBuilder.ts";
import {WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder} from "./WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder.ts";
import {WithFinalIfFragmentShaderSourceCodeMainBuilder} from "./WithFinalIfFragmentShaderSourceCodeMainBuilder.ts";
export class FragmentShaderSourceCodeMainBuilder<
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
				custom: {} as CustomFunctions,
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
		const newBuilder = new WithFinalFinalAssignmentsFragmentShaderSourceCodeMainBuilder(statements);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		varyingVariablesDeclarations: VaryingVariablesDeclarationsToUse,
		customFunctions: CustomFunctions,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.varyingVariablesDeclarations = varyingVariablesDeclarations;
		this.customFunctions = customFunctions;
		this.localVariablesDeclarations = localVariablesDeclarations;
	}
	public defineVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
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
		const value = valueCreator({
			functionCalls: {
				custom: {} as CustomFunctions,
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
		const newBuilder = new WithFinalAssignmentFragmentShaderSourceCodeMainBuilder(
			this.uniformVariablesDeclarations,
			this.varyingVariablesDeclarations,
			this.customFunctions,
			newLocalVariablesDeclarations,
			statements,
		);
		return newBuilder;
	}
	public if_(condition: BoolValue): WithFinalIfFragmentShaderSourceCodeMainBuilder {
		const statements = new FinalIfFragmentShaderSourceCodeMainStatements(condition);
		const newBuilder = new WithFinalIfFragmentShaderSourceCodeMainBuilder(statements);
		return newBuilder;
	}
}
