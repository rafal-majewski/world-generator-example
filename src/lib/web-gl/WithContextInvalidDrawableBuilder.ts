import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {WithContextValidDrawableBuilder} from "./WithContextValidDrawableBuilder.ts";
export interface WithContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext> {
	addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): WithContextValidDrawableBuilder<Scene, CurrentContext>;
	addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): WithContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext>;
	addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): WithContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>;
}
