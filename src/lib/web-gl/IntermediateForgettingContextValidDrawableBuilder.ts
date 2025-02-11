import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {ForgettingContextCombinedDrawableBuilder} from "./ForgettingContextCombinedDrawableBuilder.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {ForgettingContextValidDrawableBuilder} from "./ForgettingContextValidDrawableBuilder.ts";
import {IntermediateForgettingContextInvalidDrawableBuilder} from "./IntermediateForgettingContextInvalidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
import type {WithoutContextValidDrawableBuilder} from "./WithoutContextValidDrawableBuilder.ts";
export class IntermediateForgettingContextValidDrawableBuilder<Scene, CurrentContext>
	implements ForgettingContextValidDrawableBuilder<Scene, CurrentContext>
{
	private readonly builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>;
	private readonly restBuilder: WithoutContextValidDrawableBuilder<Scene>;
	public constructor(
		builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>,
		restBuilder: WithoutContextValidDrawableBuilder<Scene>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): ForgettingContextDrawable<Scene, CurrentContext> {
		const combinedBuilder = new ForgettingContextCombinedDrawableBuilder(
			this.builder,
			this.restBuilder,
		);
		const drawable = combinedBuilder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateForgettingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(builder);
		const newBuilder = new IntermediateForgettingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): IntermediateForgettingContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(builder);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
