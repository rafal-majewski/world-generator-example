import type {ChangingContextCombinedDrawable} from "./ChangingContextCombinedDrawable.ts";
import {ChangingContextCombinedDrawableBuilder} from "./ChangingContextCombinedDrawableBuilder.ts";
import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ChangingContextValidDrawableBuilder} from "./ChangingContextValidDrawableBuilder.ts";
import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {IntermediateChangingContextInvalidDrawableBuilder} from "./IntermediateChangingContextInvalidDrawableBuilder.ts";
import type {WithContextValidDrawableBuilder} from "./WithContextValidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class IntermediateChangingContextValidDrawableBuilder<Scene, OldContext, NewContext>
	implements ChangingContextValidDrawableBuilder<Scene, OldContext>
{
	private readonly builder: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>;
	private readonly restBuilder: WithContextValidDrawableBuilder<Scene, NewContext>;
	public constructor(
		builder: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>,
		restBuilder: WithContextValidDrawableBuilder<Scene, NewContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public build(
		gl: WebGL2RenderingContext,
	): ChangingContextCombinedDrawable<Scene, OldContext, NewContext> {
		const combinedBuilder = new ChangingContextCombinedDrawableBuilder(
			this.builder,
			this.restBuilder,
		);
		const drawable = combinedBuilder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateChangingContextValidDrawableBuilder<Scene, OldContext, NewContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(builder);
		const newBuilder = new IntermediateChangingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): IntermediateChangingContextInvalidDrawableBuilder<
		Scene,
		OldContext,
		NewContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(builder);
		const newBuilder = new IntermediateChangingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
