import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {FinalCreatingContextInvalidDrawableBuilder} from "./FinalCreatingContextInvalidDrawableBuilder.ts";
import {FinalWithoutContextValidDrawableBuilder} from "./FinalWithoutContextValidDrawableBuilder.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {ForgettingContextValidDrawableBuilder} from "./ForgettingContextValidDrawableBuilder.ts";
import {IntermediateForgettingContextInvalidDrawableBuilder} from "./IntermediateForgettingContextInvalidDrawableBuilder.ts";
import {IntermediateForgettingContextValidDrawableBuilder} from "./IntermediateForgettingContextValidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class FinalForgettingContextValidDrawableBuilder<Scene, CurrentContext>
	implements ForgettingContextValidDrawableBuilder<Scene, CurrentContext>
{
	private readonly builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>;
	public constructor(builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>) {
		this.builder = builder;
	}
	public build(gl: WebGL2RenderingContext): ForgettingContextDrawable<Scene, CurrentContext> {
		const drawable = this.builder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateForgettingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = new FinalWithoutContextValidDrawableBuilder(builder);
		const newBuilder = new IntermediateForgettingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): IntermediateForgettingContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext> {
		const newBuilderRestBuilder = new FinalCreatingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
