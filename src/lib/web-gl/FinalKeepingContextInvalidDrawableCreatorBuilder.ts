import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import {FinalChangingContextInvalidDrawableCreatorBuilder} from "./FinalChangingContextInvalidDrawableCreatorBuilder.ts";
import {FinalForgettingContextValidDrawableCreatorBuilder} from "./FinalForgettingContextValidDrawableCreatorBuilder.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateKeepingContextInvalidDrawableCreatorBuilder} from "./IntermediateKeepingContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateKeepingContextValidDrawableCreatorBuilder} from "./IntermediateKeepingContextValidDrawableCreatorBuilder.ts";
import type {KeepingContextInvalidDrawableCreatorBuilder} from "./KeepingContextInvalidDrawableCreatorBuilder.ts";
export class FinalKeepingContextInvalidDrawableCreatorBuilder<Scene, Context>
	implements KeepingContextInvalidDrawableCreatorBuilder<Scene, Context, Context>
{
	private readonly creator: ForgettingContextDrawableCreator<Scene, Context>;
	public constructor(creator: ForgettingContextDrawableCreator<Scene, Context>) {
		this.creator = creator;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, Context>,
	): IntermediateKeepingContextValidDrawableCreatorBuilder<Scene, Context> {
		const newBuilderRestBuilder = new FinalForgettingContextValidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateKeepingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, Context, NewFinalContext>,
	): IntermediateKeepingContextInvalidDrawableCreatorBuilder<Scene, Context, NewFinalContext> {
		const newBuilderRestBuilder = new FinalChangingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, Context>,
	): IntermediateKeepingContextInvalidDrawableCreatorBuilder<Scene, Context, Context> {
		const newBuilderRestBuilder = new FinalKeepingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
