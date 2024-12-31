export type VariableTypeToVariableValue = {
	float: number;
	vec2: readonly [number, number];
	vec3: readonly [number, number, number];
	vec4: readonly [number, number, number, number];
	mat2: readonly [readonly [number, number], readonly [number, number]];
	mat3: readonly [
		readonly [number, number, number],
		readonly [number, number, number],
		readonly [number, number, number],
	];
	mat4: readonly [
		readonly [number, number, number, number],
		readonly [number, number, number, number],
		readonly [number, number, number, number],
		readonly [number, number, number, number],
	];
};
