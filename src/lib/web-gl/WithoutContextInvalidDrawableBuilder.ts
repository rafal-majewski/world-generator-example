import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {WithoutContextValidDrawableBuilder} from "./WithoutContextValidDrawableBuilder.ts";
export interface WithoutContextInvalidDrawableBuilder<Scene, FinalContext> {
	addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): WithoutContextValidDrawableBuilder<Scene>;
	addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): WithoutContextInvalidDrawableBuilder<Scene, NewFinalContext>;
	addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): WithoutContextInvalidDrawableBuilder<Scene, FinalContext>;
}
