import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithContextInvalidDrawableCreatorBuilder} from "./WithContextInvalidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export interface WithContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
	build(): ForgettingContextDrawableCreator<Scene, CurrentContext>;
	addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): WithContextValidDrawableCreatorBuilder<Scene, CurrentContext>;
	addCreatingContext<NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): WithContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, NewFinalContext>;
}
