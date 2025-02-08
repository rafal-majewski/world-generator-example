import type {FloatValue} from "./FloatValue.ts";
import type {Mat2Value} from "./Mat2Value.ts";
import type {Mat3Value} from "./Mat3Value.ts";
import type {Mat4Value} from "./Mat4Value.ts";
import type {Vec2Value} from "./Vec2Value.ts";
import type {Vec3Value} from "./Vec3Value.ts";
import type {Vec4Value} from "./Vec4Value.ts";
export type VariableTypeToVariableValue = Readonly<{
	vec4: Vec4Value;
	float: FloatValue;
	vec3: Vec3Value;
	vec2: Vec2Value;
	mat2: Mat2Value;
	mat3: Mat3Value;
	mat4: Mat4Value;
}>;
