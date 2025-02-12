import type {Value} from "./Value.ts";
import {XFromVec2Accessor} from "./XFromVec2Accessor.ts";
import {YFromVec2Accessor} from "./YFromVec2Accessor.ts";
export abstract class Vec2Value implements Value {
	public readonly type = "vec2";
	public x(): XFromVec2Accessor {
		return new XFromVec2Accessor(this);
	}
	public abstract stringify(): string;
	public y(): YFromVec2Accessor {
		return new YFromVec2Accessor(this);
	}
}
