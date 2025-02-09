import type {BoolValue} from "./BoolValue.ts";
import {builtInFunctions} from "./builtInFunctions.ts";
import {FinalAssignmentsVertexShaderMainSpecificationStatements} from "./FinalAssignmentsVertexShaderMainSpecificationStatements.ts";
import {FinalAssignmentVertexShaderMainSpecificationStatements} from "./FinalAssignmentVertexShaderMainSpecificationStatements.ts";
import {FinalIfVertexShaderMainSpecificationStatements} from "./FinalIfVertexShaderMainSpecificationStatements.ts";
import type {Functions} from "./Functions.ts";
import type {Value} from "./Value.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {variableTypeToVariableValueConstructor} from "./variableTypeToVariableValueConstructor.ts";
import type {VertexShaderMainSpecificationFinalAssignmentsCreator} from "./VertexShaderMainSpecificationFinalAssignmentsCreator.ts";
import type {VertexShaderMainSpecificationVariableValueCreator} from "./VertexShaderMainSpecificationVariableValueCreator.ts";
import {WithFinalAssignmentsVertexShaderMainSpecificationBuilder} from "./WithFinalAssignmentsVertexShaderMainSpecificationBuilder.ts";
import {WithFinalAssignmentVertexShaderMainSpecificationBuilder} from "./WithFinalAssignmentVertexShaderMainSpecificationBuilder.ts";
import {WithFinalIfVertexShaderMainSpecificationBuilder} from "./WithFinalIfVertexShaderMainSpecificationBuilder.ts";
export class VertexShaderMainSpecificationBuilder<
	UniformsDeclarations extends VariablesDeclarations,
	AttributesDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
	LocalsDeclarations extends VariablesDeclarations,
> {
	private readonly uniformsDeclarations: UniformsDeclarations;
	private readonly attributesDeclarations: AttributesDeclarations;
	private readonly customFunctions: CustomFunctions;
	private readonly localsDeclarations: LocalsDeclarations;
	public finalize(
		creator: VertexShaderMainSpecificationFinalAssignmentsCreator<
			UniformsDeclarations,
			AttributesDeclarations,
			VaryingsDeclarations,
			CustomFunctions,
			LocalsDeclarations
		>,
	): WithFinalAssignmentsVertexShaderMainSpecificationBuilder {
		const assignments = creator({
			functions: {
				custom: this.customFunctions,
				builtIn: builtInFunctions,
			},
			variables: {
				uniforms: Object.fromEntries(
					Object.entries(this.uniformsDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`u_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof UniformsDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[UniformsDeclarations[Name]]
					>;
				}>,
				ins: Object.fromEntries(
					Object.entries(this.attributesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`a_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof AttributesDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[AttributesDeclarations[Name]]
					>;
				}>,
				locals: Object.fromEntries(
					Object.entries(this.localsDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`l_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof LocalsDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[LocalsDeclarations[Name]]
					>;
				}>,
			},
		});
		const statements = new FinalAssignmentsVertexShaderMainSpecificationStatements(assignments);
		const newBuilder = new WithFinalAssignmentsVertexShaderMainSpecificationBuilder(statements);
		return newBuilder;
	}
	public constructor(
		uniformsDeclarations: UniformsDeclarations,
		attributesDeclarations: AttributesDeclarations,
		customFunctions: CustomFunctions,
		localsDeclarations: LocalsDeclarations,
	) {
		this.uniformsDeclarations = uniformsDeclarations;
		this.attributesDeclarations = attributesDeclarations;
		this.customFunctions = customFunctions;
		this.localsDeclarations = localsDeclarations;
	}
	public defineVariable<VariableNameToUse extends VariableName, ValueToUse extends Value>(
		name: VariableNameToUse,
		valueCreator: VertexShaderMainSpecificationVariableValueCreator<
			UniformsDeclarations,
			AttributesDeclarations,
			CustomFunctions,
			LocalsDeclarations,
			ValueToUse
		>,
	): WithFinalAssignmentVertexShaderMainSpecificationBuilder<
		UniformsDeclarations,
		AttributesDeclarations,
		VaryingsDeclarations,
		CustomFunctions,
		LocalsDeclarations & Readonly<Record<VariableNameToUse, ValueToUse["type"]>>
	> {
		const value = valueCreator({
			functions: {
				custom: this.customFunctions,
				builtIn: builtInFunctions,
			},
			variables: {
				uniforms: Object.fromEntries(
					Object.entries(this.uniformsDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`u_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof UniformsDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[UniformsDeclarations[Name]]
					>;
				}>,
				ins: Object.fromEntries(
					Object.entries(this.attributesDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`a_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof AttributesDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[AttributesDeclarations[Name]]
					>;
				}>,
				locals: Object.fromEntries(
					Object.entries(this.localsDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`l_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof LocalsDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[LocalsDeclarations[Name]]
					>;
				}>,
			},
		});
		const newLocalsDeclarations = {
			...this.localsDeclarations,
			[name]: value.type,
		} as LocalsDeclarations & Readonly<Record<VariableNameToUse, ValueToUse>>;
		const statements = new FinalAssignmentVertexShaderMainSpecificationStatements(name, value);
		const newBuilder = new WithFinalAssignmentVertexShaderMainSpecificationBuilder(
			this.uniformsDeclarations,
			this.attributesDeclarations,
			this.customFunctions,
			newLocalsDeclarations,
			statements,
		);
		return newBuilder;
	}
	public if_(condition: BoolValue): WithFinalIfVertexShaderMainSpecificationBuilder {
		const statements = new FinalIfVertexShaderMainSpecificationStatements(condition);
		const newBuilder = new WithFinalIfVertexShaderMainSpecificationBuilder(statements);
		return newBuilder;
	}
}
