import type {VariablesDeclarations} from "./VariablesDeclarations.ts";
import {FragmentShaderMainSpecification} from "./FragmentShaderMainSpecification.ts";
import type {FragmentShaderMainSpecificationFinalAssignmentsCreator} from "./FragmentShaderMainSpecificationFinalAssignmentsCreator.ts";
import {FragmentShaderMainSpecificationFinalStatement} from "./FragmentShaderMainSpecificationFinalStatement.ts";
import type {Functions} from "./Functions.ts";
import {builtInFunctions} from "./builtInFunctions.ts";
import {variableTypeToVariableValueConstructor} from "./variableTypeToVariableValueConstructor.ts";
export class FragmentShaderMainSpecificationBuilder<
	UniformsDeclarations extends VariablesDeclarations,
	VaryingsDeclarations extends VariablesDeclarations,
	OutputsDeclarations extends VariablesDeclarations,
	CustomFunctions extends Functions,
> {
	public finalize(
		creator: FragmentShaderMainSpecificationFinalAssignmentsCreator<
			UniformsDeclarations,
			VaryingsDeclarations,
			OutputsDeclarations,
			CustomFunctions
		>,
	): FragmentShaderMainSpecification {
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
					Object.entries(this.varyingsDeclarations).map(([name, type]) => {
						const value = new variableTypeToVariableValueConstructor[type](`v_${name}`);
						return [name, value];
					}),
				) as unknown as Readonly<{
					[Name in keyof VaryingsDeclarations]: InstanceType<
						(typeof variableTypeToVariableValueConstructor)[VaryingsDeclarations[Name]]
					>;
				}>,
			},
		});
		const statement = new FragmentShaderMainSpecificationFinalStatement(assignments);
		const specification = new FragmentShaderMainSpecification(statement);
		return specification;
	}
	public constructor(
		uniformsDeclarations: UniformsDeclarations,
		varyingsDeclarations: VaryingsDeclarations,
		customFunctions: CustomFunctions,
	) {
		this.uniformsDeclarations = uniformsDeclarations;
		this.varyingsDeclarations = varyingsDeclarations;
		this.customFunctions = customFunctions;
	}
	private readonly uniformsDeclarations: UniformsDeclarations;
	private readonly varyingsDeclarations: VaryingsDeclarations;
	private readonly customFunctions: CustomFunctions;
}
