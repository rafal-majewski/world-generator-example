import {SinFunctionCall} from "./SinFunctionCall.ts";
import {Vec2FunctionCall} from "./Vec2FunctionCall.ts";
import {Vec3AndFloatConstructingVec4FunctionCall} from "./Vec3AndFloatConstructingVec4Value.ts";
export const builtInFunctionCalls = {
	sin: SinFunctionCall,
	vec2: Vec2FunctionCall,
	vec4FromVec3AndFloat: Vec3AndFloatConstructingVec4FunctionCall,
} as const;
