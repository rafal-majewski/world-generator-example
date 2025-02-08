import {builtInFunctions} from "./builtInFunctions.ts";
import {FinalAssignmentsVertexShaderMainSpecificationStatements} from "./FinalAssignmentsVertexShaderMainSpecificationStatements.ts";
import {FinalAssignmentVertexShaderMainSpecificationStatements} from "./FinalAssignmentVertexShaderMainSpecificationStatements.ts";
import type {Functions} from "./Functions.ts";
import type {VariableName} from "./VariableName.ts";
import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import type {VariableType} from "./VariableType.ts";
import {variableTypeToVariableValueConstructor} from "./variableTypeToVariableValueConstructor.ts";
import {VertexShaderMainSpecification} from "./VertexShaderMainSpecification.ts";
import type {VertexShaderMainSpecificationFinalAssignmentsCreator} from "./VertexShaderMainSpecificationFinalAssignmentsCreator.ts";
import type {VertexShaderMainSpecificationVariableValueCreator} from "./VertexShaderMainSpecificationVariableValueCreator.ts";
import {WithFinalAssignmentStatementVertexShaderMainSpecificationBuilder} from "./WithFinalAssignmentStatementVertexShaderMainSpecificationBuilder.ts";
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
	): VertexShaderMainSpecification {
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
		const specification = new VertexShaderMainSpecification(statements);
		return specification;
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
	public defineLocalVariable<
		VariableNameToUse extends VariableName,
		VariableTypeToUse extends VariableType,
	>(
		name: VariableNameToUse,
		valueCreator: VertexShaderMainSpecificationVariableValueCreator<
			UniformsDeclarations,
			AttributesDeclarations,
			CustomFunctions,
			LocalsDeclarations
		>,
	): WithFinalAssignmentStatementVertexShaderMainSpecificationBuilder<
		UniformsDeclarations,
		AttributesDeclarations,
		VaryingsDeclarations,
		CustomFunctions,
		LocalsDeclarations & Readonly<Record<VariableNameToUse, VariableTypeToUse>>
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
		} as LocalsDeclarations & Readonly<Record<VariableNameToUse, VariableTypeToUse>>;
		const statements = new FinalAssignmentVertexShaderMainSpecificationStatements(name, value);
		const newBuilder = new WithFinalAssignmentStatementVertexShaderMainSpecificationBuilder(
			this.uniformsDeclarations,
			this.attributesDeclarations,
			this.customFunctions,
			newLocalsDeclarations,
			statements,
		);
		return newBuilder;
	}
}
