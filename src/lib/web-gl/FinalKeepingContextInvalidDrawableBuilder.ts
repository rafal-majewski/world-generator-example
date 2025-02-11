import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import {FinalChangingContextInvalidDrawableBuilder} from "./FinalChangingContextInvalidDrawableBuilder.ts";
import {FinalForgettingContextValidDrawableBuilder} from "./FinalForgettingContextValidDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateKeepingContextInvalidDrawableBuilder} from "./IntermediateKeepingContextInvalidDrawableBuilder.ts";
import {IntermediateKeepingContextValidDrawableBuilder} from "./IntermediateKeepingContextValidDrawableBuilder.ts";
import type {KeepingContextInvalidDrawableBuilder} from "./KeepingContextInvalidDrawableBuilder.ts";
export class FinalKeepingContextInvalidDrawableBuilder<Scene, Context>
	implements KeepingContextInvalidDrawableBuilder<Scene, Context, Context>
{
	private readonly builder: ForgettingContextDrawableBuilder<Scene, Context>;
	public constructor(builder: ForgettingContextDrawableBuilder<Scene, Context>) {
		this.builder = builder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, Context>,
	): IntermediateKeepingContextValidDrawableBuilder<Scene, Context> {
		const newBuilderRestBuilder = new FinalForgettingContextValidDrawableBuilder(builder);
		const newBuilder = new IntermediateKeepingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, Context, NewFinalContext>,
	): IntermediateKeepingContextInvalidDrawableBuilder<Scene, Context, NewFinalContext> {
		const newBuilderRestBuilder = new FinalChangingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, Context>,
	): IntermediateKeepingContextInvalidDrawableBuilder<Scene, Context, Context> {
		const newBuilderRestBuilder = new FinalKeepingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
