import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {FinalCreatingContextInvalidDrawableCreatorBuilder} from "./FinalCreatingContextInvalidDrawableCreatorBuilder.ts";
import {FinalWithoutContextValidDrawableCreatorBuilder} from "./FinalWithoutContextValidDrawableCreatorBuilder.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {ForgettingContextValidDrawableCreatorBuilder} from "./ForgettingContextValidDrawableCreatorBuilder.ts";
import {IntermediateForgettingContextInvalidDrawableCreatorBuilder} from "./IntermediateForgettingContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateForgettingContextValidDrawableCreatorBuilder} from "./IntermediateForgettingContextValidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class FinalForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
	implements ForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
{
	private readonly creator: ForgettingContextDrawableCreator<Scene, CurrentContext>;
	public constructor(creator: ForgettingContextDrawableCreator<Scene, CurrentContext>) {
		this.creator = creator;
	}
	public build(): ForgettingContextDrawableCreator<Scene, CurrentContext> {
		return this.creator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = new FinalWithoutContextValidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateForgettingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): IntermediateForgettingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = new FinalCreatingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
