import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateKeepingContextValidDrawableCreatorBuilder} from "./IntermediateKeepingContextValidDrawableCreatorBuilder.ts";
import type {KeepingContextInvalidDrawableCreatorBuilder} from "./KeepingContextInvalidDrawableCreatorBuilder.ts";
import type {WithContextInvalidDrawableCreatorBuilder} from "./WithContextInvalidDrawableCreatorBuilder.ts";
export class IntermediateKeepingContextInvalidDrawableCreatorBuilder<
	Scene,
	CurrentContext,
	FinalContext,
> implements KeepingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext>
{
	private readonly creator: ForgettingContextDrawableCreator<Scene, CurrentContext>;
	private readonly restBuilder: WithContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		FinalContext
	>;
	public constructor(
		creator: ForgettingContextDrawableCreator<Scene, CurrentContext>,
		restBuilder: WithContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateKeepingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(creator);
		const newBuilder = new IntermediateKeepingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): IntermediateKeepingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = this.restBuilder.addChangingContext(creator);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateKeepingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext> {
		const newBuilderRestBuilder = this.restBuilder.addKeepingContext(creator);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
