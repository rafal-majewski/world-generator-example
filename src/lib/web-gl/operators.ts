import {GreaterThanOperator} from "./GreaterThanOperator.ts";
import {Mat4TimesVec4Operator} from "./Mat4TimesVec4Operator.ts";
export const operators = {
	mat4TimesVec4: Mat4TimesVec4Operator,
	greaterThan: GreaterThanOperator,
} as const;
