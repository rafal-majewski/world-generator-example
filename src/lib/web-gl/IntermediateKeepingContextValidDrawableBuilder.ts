import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateKeepingContextInvalidDrawableBuilder} from "./IntermediateKeepingContextInvalidDrawableBuilder.ts";
import type {KeepingContextCombinedDrawable} from "./KeepingContextCombinedDrawable.ts";
import {KeepingContextCombinedDrawableBuilder} from "./KeepingContextCombinedDrawableBuilder.ts";
import type {KeepingContextValidDrawableBuilder} from "./KeepingContextValidDrawableBuilder.ts";
import type {WithContextValidDrawableBuilder} from "./WithContextValidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class IntermediateKeepingContextValidDrawableBuilder<Scene, CurrentContext>
	implements KeepingContextValidDrawableBuilder<Scene, CurrentContext>
{
	private readonly builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>;
	private readonly restBuilder: WithContextValidDrawableBuilder<Scene, CurrentContext>;
	public constructor(
		builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>,
		restBuilder: WithContextValidDrawableBuilder<Scene, CurrentContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): KeepingContextCombinedDrawable<Scene, CurrentContext> {
		const combinedBuilder = new KeepingContextCombinedDrawableBuilder(
			this.builder,
			this.restBuilder,
		);
		const drawable = combinedBuilder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateKeepingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(builder);
		const newBuilder = new IntermediateKeepingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<AddingContext>(
		builder: CreatingContextDrawableBuilder<Scene, AddingContext>,
	): IntermediateKeepingContextInvalidDrawableBuilder<Scene, CurrentContext, AddingContext> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(builder);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
