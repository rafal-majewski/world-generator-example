import type {VariableType} from "./VariableType.ts";

export const variableTypeToSize = {
	float: 1,
	vec4: 4,
	vec2: 2,
	mat4: 16,
	mat3: 9,
	mat2: 4,
	vec3: 3,
} as const satisfies Record<VariableType, number>;
