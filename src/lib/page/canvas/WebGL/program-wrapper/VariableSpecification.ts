export type VariableSpecification<VariableType, VariableValue> = Readonly<{
	type: VariableType;
	value: VariableValue;
}>;
export type FloatVariableSpecification = VariableSpecification<"float", number>;
export type Vec2VariableSpecification = VariableSpecification<"vec2", readonly [number, number]>;
export type Vec3VariableSpecification = VariableSpecification<
	"vec3",
	readonly [number, number, number]
>;
export type Vec4VariableSpecification = VariableSpecification<
	"vec4",
	readonly [number, number, number, number]
>;
export type Mat2VariableSpecification = VariableSpecification<
	"mat2",
	readonly [readonly [number, number], readonly [number, number]]
>;
export type Mat3VariableSpecification = VariableSpecification<
	"mat3",
	readonly [
		readonly [number, number, number],
		readonly [number, number, number],
		readonly [number, number, number],
	]
>;
export type Mat4VariableSpecification = VariableSpecification<
	"mat4",
	readonly [
		readonly [number, number, number, number],
		readonly [number, number, number, number],
		readonly [number, number, number, number],
		readonly [number, number, number, number],
	]
>;
export type SupportedVariableSpecification =
	| FloatVariableSpecification
	| Vec2VariableSpecification
	| Vec3VariableSpecification
	| Vec4VariableSpecification
	| Mat2VariableSpecification
	| Mat3VariableSpecification
	| Mat4VariableSpecification;
export type SupportedVariableType = SupportedVariableSpecification["type"];
export type SupportedVariableTypeToVariableValue = Readonly<{
	[CurrentVariableType in SupportedVariableType]: Extract<
		SupportedVariableSpecification,
		{type: CurrentVariableType}
	>["value"];
}>;
