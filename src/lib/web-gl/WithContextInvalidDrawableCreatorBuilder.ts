import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithContextValidDrawableCreatorBuilder} from "./WithContextValidDrawableCreatorBuilder.ts";
export interface WithContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext> {
	addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): WithContextValidDrawableCreatorBuilder<Scene, CurrentContext>;
	addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): WithContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, NewFinalContext>;
	addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): WithContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext>;
}
