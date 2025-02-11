import type {UniformVariableSpecification} from "./UniformVariableSpecification.ts";
import type {VariableName} from "./VariableName.ts";
export type UniformVariablesSpecifications<Scene> = Readonly<
	Record<VariableName, UniformVariableSpecification<Scene>>
>;
