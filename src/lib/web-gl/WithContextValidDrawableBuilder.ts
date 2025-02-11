import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {WithContextInvalidDrawableBuilder} from "./WithContextInvalidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export interface WithContextValidDrawableBuilder<Scene, CurrentContext> {
	build(gl: WebGL2RenderingContext): ForgettingContextDrawable<Scene, CurrentContext>;
	addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): WithContextValidDrawableBuilder<Scene, CurrentContext>;
	addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): WithContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext>;
}
