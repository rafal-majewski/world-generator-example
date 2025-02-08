import type {VariableName} from "./VariableName.ts";
import type {VariableSpecification} from "./VariableSpecification.ts";
export type VariablesSpecifications<Datum> = Readonly<
	Record<VariableName, VariableSpecification<Datum>>
>;
