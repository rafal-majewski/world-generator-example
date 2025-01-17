import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithoutContextValidDrawableCreatorBuilder} from "./WithoutContextValidDrawableCreatorBuilder.ts";
export interface WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext> {
	addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): WithoutContextValidDrawableCreatorBuilder<Scene>;
	addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): WithoutContextInvalidDrawableCreatorBuilder<Scene, NewFinalContext>;
	addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>;
}
