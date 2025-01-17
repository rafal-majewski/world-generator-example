import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ChangingContextInvalidDrawableCreatorBuilder} from "./ChangingContextInvalidDrawableCreatorBuilder.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateChangingContextValidDrawableCreatorBuilder} from "./IntermediateChangingContextValidDrawableCreatorBuilder.ts";
import type {WithContextInvalidDrawableCreatorBuilder} from "./WithContextInvalidDrawableCreatorBuilder.ts";
export class IntermediateChangingContextInvalidDrawableCreatorBuilder<
	Scene,
	OldContext,
	NewContext,
	FinalContext,
> implements ChangingContextInvalidDrawableCreatorBuilder<Scene, OldContext, FinalContext>
{
	private readonly creator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>;
	private readonly restBuilder: WithContextInvalidDrawableCreatorBuilder<
		Scene,
		NewContext,
		FinalContext
	>;
	public constructor(
		creator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>,
		restBuilder: WithContextInvalidDrawableCreatorBuilder<Scene, NewContext, FinalContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateChangingContextValidDrawableCreatorBuilder<Scene, OldContext, NewContext> {
		const newBuilderRestBuilder = this.restBuilder.addForgettingContext(creator);
		const newBuilder = new IntermediateChangingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): IntermediateChangingContextInvalidDrawableCreatorBuilder<
		Scene,
		OldContext,
		NewContext,
		NewFinalContext
	> {
		const newRestBuilder = this.restBuilder.addChangingContext(creator);
		const newBuilder = new IntermediateChangingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateChangingContextInvalidDrawableCreatorBuilder<
		Scene,
		OldContext,
		NewContext,
		FinalContext
	> {
		const newRestBuilder = this.restBuilder.addKeepingContext(creator);
		const newBuilder = new IntermediateChangingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
}
