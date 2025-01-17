import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {ForgettingContextCombinedDrawableCreator} from "./ForgettingContextCombinedDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {ForgettingContextValidDrawableCreatorBuilder} from "./ForgettingContextValidDrawableCreatorBuilder.ts";
import {IntermediateForgettingContextInvalidDrawableCreatorBuilder} from "./IntermediateForgettingContextInvalidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import type {WithoutContextValidDrawableCreatorBuilder} from "./WithoutContextValidDrawableCreatorBuilder.ts";
export class IntermediateForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
	implements ForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
{
	private readonly creator: ForgettingContextDrawableCreator<Scene, CurrentContext>;
	private readonly restBuilder: WithoutContextValidDrawableCreatorBuilder<Scene>;
	public constructor(
		creator: ForgettingContextDrawableCreator<Scene, CurrentContext>,
		restBuilder: WithoutContextValidDrawableCreatorBuilder<Scene>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public build(): ForgettingContextDrawableCreator<Scene, CurrentContext> {
		const restCreator = this.restBuilder.build();
		const combinedCreator = new ForgettingContextCombinedDrawableCreator(this.creator, restCreator);
		return combinedCreator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateForgettingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(creator);
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
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(creator);
		const newBuilder = new IntermediateForgettingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
