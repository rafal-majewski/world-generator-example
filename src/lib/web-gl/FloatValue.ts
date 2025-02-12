import type {BoolValue} from "./BoolValue.ts";
import {GreaterThanOperator} from "./GreaterThanOperator.ts";
import {GreaterThanOrEqualOperator} from "./GreaterThanOrEqualOperator.ts";
import {LowerThanOperator} from "./LowerThanOperator.ts";
import {LowerThanOrEqualOperator} from "./LowerThanOrEqualOperator.ts";
import type {Value} from "./Value.ts";
export abstract class FloatValue implements Value {
	public readonly type = "float";
	public greaterThan(other: FloatValue): BoolValue {
		return new GreaterThanOperator(this, other);
	}
	public lowerThan(other: FloatValue): BoolValue {
		return new LowerThanOperator(this, other);
	}
	public greaterThanOrEqual(other: FloatValue): BoolValue {
		return new GreaterThanOrEqualOperator(this, other);
	}
	public lowerThanOrEqual(other: FloatValue): BoolValue {
		return new LowerThanOrEqualOperator(this, other);
	}
	public abstract stringify(): string;
}
