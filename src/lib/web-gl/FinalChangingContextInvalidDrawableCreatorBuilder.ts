import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ChangingContextInvalidDrawableCreatorBuilder} from "./ChangingContextInvalidDrawableCreatorBuilder.ts";
import {FinalForgettingContextValidDrawableCreatorBuilder} from "./FinalForgettingContextValidDrawableCreatorBuilder.ts";
import {FinalKeepingContextInvalidDrawableCreatorBuilder} from "./FinalKeepingContextInvalidDrawableCreatorBuilder.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateChangingContextInvalidDrawableCreatorBuilder} from "./IntermediateChangingContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateChangingContextValidDrawableCreatorBuilder} from "./IntermediateChangingContextValidDrawableCreatorBuilder.ts";
export class FinalChangingContextInvalidDrawableCreatorBuilder<Scene, OldContext, NewContext>
	implements ChangingContextInvalidDrawableCreatorBuilder<Scene, OldContext, NewContext>
{
	private readonly creator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>;
	public constructor(creator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>) {
		this.creator = creator;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, NewContext>,
	): IntermediateChangingContextValidDrawableCreatorBuilder<Scene, OldContext, NewContext> {
		const newBuilderRestBuilder = new FinalForgettingContextValidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateChangingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, NewContext, NewFinalContext>,
	): IntermediateChangingContextInvalidDrawableCreatorBuilder<
		Scene,
		OldContext,
		NewContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = new FinalChangingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateChangingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, NewContext>,
	): IntermediateChangingContextInvalidDrawableCreatorBuilder<
		Scene,
		OldContext,
		NewContext,
		NewContext
	> {
		const newBuilderRestBuilder = new FinalKeepingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateChangingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
