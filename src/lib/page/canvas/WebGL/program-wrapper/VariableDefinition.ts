import type {Serializer} from "./Serializer.ts";
import type {VariableSize} from "./VariableSize.ts";
import type {VariableType} from "./VariableType.ts";
export interface VariableDefinition<Datum> extends Serializer<Datum> {
	type: VariableType;
	size: VariableSize;
}
