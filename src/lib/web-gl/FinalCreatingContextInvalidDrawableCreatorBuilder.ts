import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {CreatingContextInvalidDrawableCreatorBuilder} from "./CreatingContextInvalidDrawableCreatorBuilder.ts";
import {FinalChangingContextInvalidDrawableCreatorBuilder} from "./FinalChangingContextInvalidDrawableCreatorBuilder.ts";
import {FinalForgettingContextValidDrawableCreatorBuilder} from "./FinalForgettingContextValidDrawableCreatorBuilder.ts";
import {FinalKeepingContextInvalidDrawableCreatorBuilder} from "./FinalKeepingContextInvalidDrawableCreatorBuilder.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateCreatingContextInvalidDrawableCreatorBuilder} from "./IntermediateCreatingContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateCreatingContextValidDrawableCreatorBuilder} from "./IntermediateCreatingContextValidDrawableCreatorBuilder.ts";
export class FinalCreatingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext>
	implements CreatingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext>
{
	private readonly creator: CreatingContextDrawableCreator<Scene, CurrentContext>;
	public constructor(creator: CreatingContextDrawableCreator<Scene, CurrentContext>) {
		this.creator = creator;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, CurrentContext>,
	): IntermediateCreatingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = new FinalForgettingContextValidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateCreatingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, CurrentContext, NewFinalContext>,
	): IntermediateCreatingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = new FinalChangingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, CurrentContext>,
	): IntermediateCreatingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		CurrentContext
	> {
		const newBuilderRestBuilder = new FinalKeepingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
