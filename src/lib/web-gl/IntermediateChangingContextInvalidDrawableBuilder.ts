import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ChangingContextInvalidDrawableBuilder} from "./ChangingContextInvalidDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateChangingContextValidDrawableBuilder} from "./IntermediateChangingContextValidDrawableBuilder.ts";
import type {WithContextInvalidDrawableBuilder} from "./WithContextInvalidDrawableBuilder.ts";
export class IntermediateChangingContextInvalidDrawableBuilder<
	Scene,
	OldContext,
	NewContext,
	FinalContext,
> implements ChangingContextInvalidDrawableBuilder<Scene, OldContext, FinalContext>
{
	private readonly builder: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>;
	private readonly restBuilder: WithContextInvalidDrawableBuilder<Scene, NewContext, FinalContext>;
	public constructor(
		builder: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>,
		restBuilder: WithContextInvalidDrawableBuilder<Scene, NewContext, FinalContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateChangingContextValidDrawableBuilder<Scene, OldContext, NewContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(builder);
		const newBuilder = new IntermediateChangingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): IntermediateChangingContextInvalidDrawableBuilder<
		Scene,
		OldContext,
		NewContext,
		NewFinalContext
	> {
		const newRestBuilder = this.restBuilder.addChangingContext(builder);
		const newBuilder = new IntermediateChangingContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateChangingContextInvalidDrawableBuilder<
		Scene,
		OldContext,
		NewContext,
		FinalContext
	> {
		const newRestBuilder = this.restBuilder.addKeepingContext(builder);
		const newBuilder = new IntermediateChangingContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
}
