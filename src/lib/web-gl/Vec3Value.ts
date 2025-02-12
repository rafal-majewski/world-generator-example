import {BFromVec3Accessor} from "./BFromVec3Accessor.ts";
import {GFromVec3Accessor} from "./GFromVec3Accessor.ts";
import {RFromVec3Accessor} from "./RFromVec3Accessor.ts";
import type {Value} from "./Value.ts";
import type {Vec2Value} from "./Vec2Value.ts";
import {XFromVec3Accessor} from "./XFromVec3Accessor.ts";
import {XyFromVec3Accessor} from "./XyFromVec3Accessor.ts";
import {XzFromVec3Accessor} from "./XzFromVec3Accessor.ts";
import {YFromVec3Accessor} from "./YFromVec3Accessor.ts";
import {ZFromVec3Accessor} from "./ZFromVec3Accessor.ts";
export abstract class Vec3Value implements Value {
	public readonly type = "vec3";
	public abstract stringify(): string;
	public b(): BFromVec3Accessor {
		return new BFromVec3Accessor(this);
	}
	public r(): RFromVec3Accessor {
		return new RFromVec3Accessor(this);
	}
	public g(): GFromVec3Accessor {
		return new GFromVec3Accessor(this);
	}
	public x(): XFromVec3Accessor {
		return new XFromVec3Accessor(this);
	}
	public y(): YFromVec3Accessor {
		return new YFromVec3Accessor(this);
	}
	public z(): ZFromVec3Accessor {
		return new ZFromVec3Accessor(this);
	}
	public xy(): Vec2Value {
		return new XyFromVec3Accessor(this);
	}
	public xz(): Vec2Value {
		return new XzFromVec3Accessor(this);
	}
}
