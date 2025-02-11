import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {WithoutContextInvalidDrawableBuilder} from "./WithoutContextInvalidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
import {IntermediateWithoutContextValidDrawableBuilder} from "./IntermediateWithoutContextValidDrawableBuilder.ts";
export class IntermediateWithoutContextInvalidDrawableBuilder<Scene, FinalContext>
	implements WithoutContextInvalidDrawableBuilder<Scene, FinalContext>
{
	private readonly builder: WithoutContextDrawableBuilder<Scene>;
	private readonly restBuilder: WithoutContextInvalidDrawableBuilder<Scene, FinalContext>;
	public constructor(
		builder: WithoutContextDrawableBuilder<Scene>,
		restBuilder: WithoutContextInvalidDrawableBuilder<Scene, FinalContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateWithoutContextValidDrawableBuilder<Scene> {
		const newRestBuilder = this.restBuilder.addForgettingContext(builder);
		const newBuilder = new IntermediateWithoutContextValidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): IntermediateWithoutContextInvalidDrawableBuilder<Scene, NewFinalContext> {
		const newRestBuilder = this.restBuilder.addChangingContext(builder);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateWithoutContextInvalidDrawableBuilder<Scene, FinalContext> {
		const newRestBuilder = this.restBuilder.addKeepingContext(builder);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
}
