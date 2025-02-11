import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {CreatingContextInvalidDrawableBuilder} from "./CreatingContextInvalidDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {IntermediateCreatingContextValidDrawableBuilder} from "./IntermediateCreatingContextValidDrawableBuilder.ts";
import type {WithContextInvalidDrawableBuilder} from "./WithContextInvalidDrawableBuilder.ts";
export class IntermediateCreatingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>
	implements CreatingContextInvalidDrawableBuilder<Scene, FinalContext>
{
	private readonly builder: CreatingContextDrawableBuilder<Scene, CurrentContext>;
	private readonly restBuilder: WithContextInvalidDrawableBuilder<
		Scene,
		CurrentContext,
		FinalContext
	>;
	public constructor(
		builder: CreatingContextDrawableBuilder<Scene, CurrentContext>,
		restBuilder: WithContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateCreatingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(builder);
		const newBuilder = new IntermediateCreatingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): IntermediateCreatingContextInvalidDrawableBuilder<Scene, CurrentContext, NewFinalContext> {
		const newRestBuilder = this.restBuilder.addChangingContext(builder);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): IntermediateCreatingContextInvalidDrawableBuilder<Scene, CurrentContext, FinalContext> {
		const newRestBuilder = this.restBuilder.addKeepingContext(builder);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
}
