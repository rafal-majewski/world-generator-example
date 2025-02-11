import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import type {uniformVariablesSpecificationsConstructors} from "./uniformVariablesSpecificationsConstructors.ts";
export type UniformVariablesSpecificationsCreator<
	Scene,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
> = (
	constructors: typeof uniformVariablesSpecificationsConstructors,
) => UniformVariablesSpecificationsToUse;
