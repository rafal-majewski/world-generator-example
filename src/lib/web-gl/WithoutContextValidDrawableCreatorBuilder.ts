import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import type {WithoutContextInvalidDrawableCreatorBuilder} from "./WithoutContextInvalidDrawableCreatorBuilder.ts";
export interface WithoutContextValidDrawableCreatorBuilder<Scene> {
	build(): WithoutContextDrawableCreator<Scene>;
	addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): WithoutContextValidDrawableCreatorBuilder<Scene>;
	addCreatingContext<NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): WithoutContextInvalidDrawableCreatorBuilder<Scene, NewFinalContext>;
}
