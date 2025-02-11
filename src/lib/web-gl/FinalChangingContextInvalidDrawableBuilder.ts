import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ChangingContextInvalidDrawableBuilder} from "./ChangingContextInvalidDrawableBuilder.ts";
import {FinalForgettingContextValidDrawableBuilder} from "./FinalForgettingContextValidDrawableBuilder.ts";
import {FinalKeepingContextInvalidDrawableBuilder} from "./FinalKeepingContextInvalidDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateChangingContextInvalidDrawableBuilder} from "./IntermediateChangingContextInvalidDrawableBuilder.ts";
import {IntermediateChangingContextValidDrawableBuilder} from "./IntermediateChangingContextValidDrawableBuilder.ts";
export class FinalChangingContextInvalidDrawableBuilder<Scene, OldContext, NewContext>
	implements ChangingContextInvalidDrawableBuilder<Scene, OldContext, NewContext>
{
	private readonly builder: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>;
	public constructor(builder: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>) {
		this.builder = builder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, NewContext>,
	): IntermediateChangingContextValidDrawableBuilder<Scene, OldContext, NewContext> {
		const newBuilderRestBuilder = new FinalForgettingContextValidDrawableBuilder(builder);
		const newBuilder = new IntermediateChangingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, NewContext, NewFinalContext>,
	): IntermediateChangingContextInvalidDrawableBuilder<
		Scene,
		OldContext,
		NewContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = new FinalChangingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateChangingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, NewContext>,
	): IntermediateChangingContextInvalidDrawableBuilder<Scene, OldContext, NewContext, NewContext> {
		const newBuilderRestBuilder = new FinalKeepingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateChangingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
