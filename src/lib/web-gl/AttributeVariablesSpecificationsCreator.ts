import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {attributeVariablesSpecificationsConstructors} from "./attributeVariablesSpecificationsConstructors.ts";
export type AttributeVariablesSpecificationsCreator<
	Scene,
	AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Scene>,
> = (
	constructors: typeof attributeVariablesSpecificationsConstructors,
) => AttributeVariablesSpecificationsToUse;
