import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithoutContextInvalidDrawableCreatorBuilder} from "./WithoutContextInvalidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import {IntermediateWithoutContextValidDrawableCreatorBuilder} from "./IntermediateWithoutContextValidDrawableCreatorBuilder.ts";
export class IntermediateWithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>
	implements WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>
{
	private readonly creator: WithoutContextDrawableCreator<Scene>;
	private readonly restBuilder: WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>;
	public constructor(
		creator: WithoutContextDrawableCreator<Scene>,
		restBuilder: WithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateWithoutContextValidDrawableCreatorBuilder<Scene> {
		const newRestBuilder = this.restBuilder.addForgettingContext(creator);
		const newBuilder = new IntermediateWithoutContextValidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): IntermediateWithoutContextInvalidDrawableCreatorBuilder<Scene, NewFinalContext> {
		const newRestBuilder = this.restBuilder.addChangingContext(creator);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): IntermediateWithoutContextInvalidDrawableCreatorBuilder<Scene, FinalContext> {
		const newRestBuilder = this.restBuilder.addKeepingContext(creator);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
}
