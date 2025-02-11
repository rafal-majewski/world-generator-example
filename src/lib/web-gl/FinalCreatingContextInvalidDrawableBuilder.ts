import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {CreatingContextInvalidDrawableBuilder} from "./CreatingContextInvalidDrawableBuilder.ts";
import {FinalChangingContextInvalidDrawableBuilder} from "./FinalChangingContextInvalidDrawableBuilder.ts";
import {FinalForgettingContextValidDrawableBuilder} from "./FinalForgettingContextValidDrawableBuilder.ts";
import {FinalKeepingContextInvalidDrawableBuilder} from "./FinalKeepingContextInvalidDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateCreatingContextInvalidDrawableBuilder} from "./IntermediateCreatingContextInvalidDrawableBuilder.ts";
import {IntermediateCreatingContextValidDrawableBuilder} from "./IntermediateCreatingContextValidDrawableBuilder.ts";
export class FinalCreatingContextInvalidDrawableBuilder<Scene, CurrentContext>
	implements CreatingContextInvalidDrawableBuilder<Scene, CurrentContext>
{
	private readonly builder: CreatingContextDrawableBuilder<Scene, CurrentContext>;
	public constructor(builder: CreatingContextDrawableBuilder<Scene, CurrentContext>) {
		this.builder = builder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>,
	): IntermediateCreatingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = new FinalForgettingContextValidDrawableBuilder(builder);
		const newBuilder = new IntermediateCreatingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, CurrentContext, NewFinalContext>,
	): IntermediateCreatingContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext> {
		const newBuilderRestBuilder = new FinalChangingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>,
	): IntermediateCreatingContextInvalidDrawableBuilder<Scene, CurrentContext, CurrentContext> {
		const newBuilderRestBuilder = new FinalKeepingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
