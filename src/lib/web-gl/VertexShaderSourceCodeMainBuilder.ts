import type {BoolValue} from "./BoolValue.ts";
import {FinalAssignmentsVertexShaderSourceCodeMainStatements} from "./FinalAssignmentsVertexShaderSourceCodeMainStatements.ts";
import {FinalAssignmentVertexShaderSourceCodeMainStatements} from "./FinalAssignmentVertexShaderSourceCodeMainStatements.ts";
import {FinalIfVertexShaderSourceCodeMainStatements} from "./FinalIfVertexShaderSourceCodeMainStatements.ts";
import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValue} from "./variableTypeToVariableValue.ts";
import type {VertexShaderSourceCodeMainFinalAssignmentsCreator} from "./VertexShaderSourceCodeMainFinalAssignmentsCreator.ts";
import type {VertexShaderSourceCodeMainVariableValueCreator} from "./VertexShaderSourceCodeMainVariableValueCreator.ts";
import {WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder} from "./WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder.ts";
import {WithFinalAssignmentVertexShaderSourceCodeMainBuilder} from "./WithFinalAssignmentVertexShaderSourceCodeMainBuilder.ts";
import {WithFinalIfVertexShaderSourceCodeMainBuilder} from "./WithFinalIfVertexShaderSourceCodeMainBuilder.ts";
import {literals} from "./literals.ts";
import {operators} from "./operators.ts";
import {builtInFunctionCalls} from "./builtInFunctionCalls.ts";
export class VertexShaderSourceCodeMainBuilder<
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
		const statements = new FinalAssignmentsVertexShaderSourceCodeMainStatements(assignments);
		const newBuilder = new WithFinalFinalAssignmentsVertexShaderSourceCodeMainBuilder(statements);
		return newBuilder;
	}
	public constructor(
		uniformVariablesDeclarations: UniformVariablesDeclarationsToUse,
		attributeVariablesDeclarations: AttributeVariablesDeclarationsToUse,
		customFunctions: CustomFunctions,
		localVariablesDeclarations: LocalVariablesDeclarationsToUse,
	) {
		this.uniformVariablesDeclarations = uniformVariablesDeclarations;
		this.attributeVariablesDeclarations = attributeVariablesDeclarations;
		this.customFunctions = customFunctions;
		this.localVariablesDeclarations = localVariablesDeclarations;
	}
	public defineVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
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
		const value = valueCreator({
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
		const newLocalVariablesDeclarations = {
			...this.localVariablesDeclarations,
			[name]: value.type,
		} as LocalVariablesDeclarationsToUse & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const statements = new FinalAssignmentVertexShaderSourceCodeMainStatements(name, value);
		const newBuilder = new WithFinalAssignmentVertexShaderSourceCodeMainBuilder(
			this.uniformVariablesDeclarations,
			this.attributeVariablesDeclarations,
			this.customFunctions,
			newLocalVariablesDeclarations,
			statements,
		);
		return newBuilder;
	}
	public if_(condition: BoolValue): WithFinalIfVertexShaderSourceCodeMainBuilder {
		const statements = new FinalIfVertexShaderSourceCodeMainStatements(condition);
		const newBuilder = new WithFinalIfVertexShaderSourceCodeMainBuilder(statements);
		return newBuilder;
	}
}
