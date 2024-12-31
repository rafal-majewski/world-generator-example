import type {VariableType} from "../../variable-type/VariableType.ts";
export const variableTypeToVariableSize = {
	float: 1,
	vec4: 4,
	vec2: 2,
	mat4: 16,
	mat3: 9,
	mat2: 4,
	vec3: 3,
} as const satisfies Record<VariableType, number>;
