// import type {SupportedVariableSpecification} from "./SupportedVariableSpecification.ts";
// import type {SupportedVariableType} from "./SupportedVariableType.ts";
// export const supportedVariableTypeToVariableSize = {
// 	float: 1,
// 	vec2: 2,
// 	vec3: 3,
// 	vec4: 4,
// 	mat2: 4,
// 	mat3: 9,
// 	mat4: 16,
// } as const satisfies {
// 	[CurrentVariableType in SupportedVariableType]: ComputeVariableSize<
// 		Extract<
// 			SupportedVariableSpecification,
// 			{
// 				type: CurrentVariableType;
// 			}
// 		>["value"]
// 	>;
// };
// type A = ;
// type BuildArrayHelper<
// 	Length extends number,
// 	AccumulatedResult extends readonly unknown[],
// > = AccumulatedResult["length"] extends Length
// 	? AccumulatedResult
// 	: BuildArrayHelper<Length, readonly [...AccumulatedResult, unknown]>;
// type BuildArray<Length extends number> = BuildArrayHelper<Length, readonly []>;
// type Add<Number1 extends number, Number2 extends number> = [
// 	...BuildArray<Number1>,
// 	...BuildArray<Number2>,
// ]["length"];
// type InfinitelyNestedNumber = number | readonly InfinitelyNestedNumber[];
// // type ComputeVariableSize<VariableValue extends InfinitelyNestedNumber> =
// // 	VariableValue extends number
// // 		? 1
// // 		: VariableValue extends [infer Head extends number, ...infer Tail extends number[]]
// // 			? Add<ComputeVariableSize<Head>, ComputeVariableSize<Tail>>
// // 			: 0;
// type ComputeVariableSize<VariableValue extends InfinitelyNestedNumber> =
// 	VariableValue extends number
// 		? 1
// 		: VariableValue extends readonly [
// 					infer Head extends InfinitelyNestedNumber,
// 					...infer Tail extends InfinitelyNestedNumber[],
// 			  ]
// 			? Add<ComputeVariableSize<Head>, ComputeVariableSize<Tail>>
// 			: 0;
