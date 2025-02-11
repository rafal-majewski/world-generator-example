import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
import type {WithoutContextInvalidDrawableBuilder} from "./WithoutContextInvalidDrawableBuilder.ts";
export interface WithoutContextValidDrawableBuilder<Scene> {
	build(gl: WebGL2RenderingContext): WithoutContextDrawable<Scene>;
	addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): WithoutContextValidDrawableBuilder<Scene>;
	addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): WithoutContextInvalidDrawableBuilder<Scene, NewFinalContext>;
}
