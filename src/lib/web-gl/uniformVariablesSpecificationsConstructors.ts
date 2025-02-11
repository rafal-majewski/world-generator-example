import type {Mat4} from "./Mat4.ts";
import {Mat4UniformVariableSpecification} from "./Mat4UniformVariableSpecification.ts";
export const uniformVariablesSpecificationsConstructors = {
	mat4: <Scene>(valueComputer: (scene: Scene) => Mat4) =>
		new Mat4UniformVariableSpecification(valueComputer),
} as const;
