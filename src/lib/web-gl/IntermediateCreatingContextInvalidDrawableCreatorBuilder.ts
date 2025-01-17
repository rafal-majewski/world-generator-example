import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {CreatingContextInvalidDrawableCreatorBuilder} from "./CreatingContextInvalidDrawableCreatorBuilder.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateCreatingContextValidDrawableCreatorBuilder} from "./IntermediateCreatingContextValidDrawableCreatorBuilder.ts";
import type {WithContextInvalidDrawableCreatorBuilder} from "./WithContextInvalidDrawableCreatorBuilder.ts";
export class IntermediateCreatingContextInvalidDrawableCreatorBuilder<
	Scene,
	CurrentContext,
	FinalContext,
> implements CreatingContextInvalidDrawableCreatorBuilder<Scene, FinalContext>
{
	private readonly creator: CreatingContextDrawableCreator<Scene, CurrentContext>;
	private readonly restBuilder: WithContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		FinalContext
	>;
	public constructor(
		creator: CreatingContextDrawableCreator<Scene, CurrentContext>,
		restBuilder: WithContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateCreatingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(creator);
		const newBuilder = new IntermediateCreatingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): IntermediateCreatingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		NewFinalContext
	> {
		const newRestBuilder = this.restBuilder.addChangingContext(creator);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateCreatingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, FinalContext> {
		const newRestBuilder = this.restBuilder.addKeepingContext(creator);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
}
