import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateKeepingContextValidDrawableBuilder} from "./IntermediateKeepingContextValidDrawableBuilder.ts";
import type {KeepingContextInvalidDrawableBuilder} from "./KeepingContextInvalidDrawableBuilder.ts";
import type {WithContextInvalidDrawableBuilder} from "./WithContextInvalidDrawableBuilder.ts";
export class IntermediateKeepingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>
	implements KeepingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>
{
	private readonly builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>;
	private readonly restBuilder: WithContextInvalidDrawableBuilder<
		Scene,
		CurrentContext,
		FinalContext
	>;
	public constructor(
		builder: ForgettingContextDrawableBuilder<Scene, CurrentContext>,
		restBuilder: WithContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateKeepingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(builder);
		const newBuilder = new IntermediateKeepingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): IntermediateKeepingContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext> {
		const newBuilderRestBuilder = this.restBuilder.addChangingContext(builder);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateKeepingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext> {
		const newBuilderRestBuilder = this.restBuilder.addKeepingContext(builder);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
