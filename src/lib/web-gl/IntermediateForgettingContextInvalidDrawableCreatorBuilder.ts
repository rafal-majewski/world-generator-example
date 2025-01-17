import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {ForgettingContextInvalidDrawableCreatorBuilder} from "./ForgettingContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateForgettingContextValidDrawableCreatorBuilder} from "./IntermediateForgettingContextValidDrawableCreatorBuilder.ts";
import type {WithoutContextInvalidDrawableCreatorBuilder} from "./WithoutContextInvalidDrawableCreatorBuilder.ts";
export class IntermediateForgettingContextInvalidDrawableCreatorBuilder<
	Scene,
	CurrentContext,
	FinalContext,
> implements ForgettingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext>
{
	private readonly creator: ForgettingContextDrawableCreator<Scene, CurrentContext>;
	private readonly restBuilder: WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>;
	public constructor(
		creator: ForgettingContextDrawableCreator<Scene, CurrentContext>,
		restBuilder: WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(creator);
		const newBuilder = new IntermediateForgettingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): IntermediateForgettingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = this.restBuilder.addChangingContext(creator);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateForgettingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		FinalContext
	> {
		const newBuilderRestBuilder = this.restBuilder.addKeepingContext(creator);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
