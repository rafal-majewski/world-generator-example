import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {ForgettingContextInvalidDrawableBuilder} from "./ForgettingContextInvalidDrawableBuilder.ts";
import {IntermediateForgettingContextValidDrawableBuilder} from "./IntermediateForgettingContextValidDrawableBuilder.ts";
import type {WithoutContextInvalidDrawableBuilder} from "./WithoutContextInvalidDrawableBuilder.ts";
export class IntermediateForgettingContextInvalidDrawableBuilder<
	Scene,
	CurrentContext,
	FinalContext,
> implements ForgettingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>
{
	private readonly builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>;
	private readonly restBuilder: WithoutContextInvalidDrawableBuilder<Scene, FinalContext>;
	public constructor(
		builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>,
		restBuilder: WithoutContextInvalidDrawableBuilder<Scene, FinalContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateForgettingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(builder);
		const newBuilder = new IntermediateForgettingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): IntermediateForgettingContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext> {
		const newBuilderRestBuilder = this.restBuilder.addChangingContext(builder);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateForgettingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext> {
		const newBuilderRestBuilder = this.restBuilder.addKeepingContext(builder);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
