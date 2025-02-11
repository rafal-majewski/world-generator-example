import type {Vec3} from "./Vec3.ts";
import {Vec3AttributeVariableSpecification} from "./Vec3AttributeVariableSpecification.ts";
export const attributeVariablesSpecificationsConstructors = {
	vec3: <Vertex>(valueComputer: (vertex: Vertex) => Vec3) =>
		new Vec3AttributeVariableSpecification(valueComputer),
} as const;
