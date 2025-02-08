import {VariableFloatValue} from "./VariableFloatValue.ts";
import {VariableMat2Value} from "./VariableMat2Value.ts";
import {VariableMat3Value} from "./VariableMat3Value.ts";
import {VariableMat4Value} from "./VariableMat4Value.ts";
import {VariableVec2Value} from "./VariableVec2Value.ts";
import {VariableVec3Value} from "./VariableVec3Value.ts";
import {VariableVec4Value} from "./VariableVec4Value.ts";
export const variableTypeToVariableValueConstructor = {
	float: VariableFloatValue,
	vec2: VariableVec2Value,
	vec4: VariableVec4Value,
	mat2: VariableMat2Value,
	mat3: VariableMat3Value,
	mat4: VariableMat4Value,
	vec3: VariableVec3Value,
	bool: VariableBoolValue,
} as const;
