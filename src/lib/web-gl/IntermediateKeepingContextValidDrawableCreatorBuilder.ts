import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {IntermediateKeepingContextInvalidDrawableCreatorBuilder} from "./IntermediateKeepingContextInvalidDrawableCreatorBuilder.ts";
import {KeepingContextCombinedDrawableCreator} from "./KeepingContextCombinedDrawableCreator.ts";
import type {KeepingContextValidDrawableCreatorBuilder} from "./KeepingContextValidDrawableCreatorBuilder.ts";
import type {WithContextValidDrawableCreatorBuilder} from "./WithContextValidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class IntermediateKeepingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
	implements KeepingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
{
	private readonly creator: ForgettingContextDrawableCreator<Scene, CurrentContext>;
	private readonly restBuilder: WithContextValidDrawableCreatorBuilder<Scene, CurrentContext>;
	public constructor(
		creator: ForgettingContextDrawableCreator<Scene, CurrentContext>,
		restBuilder: WithContextValidDrawableCreatorBuilder<Scene, CurrentContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public build(): KeepingContextCombinedDrawableCreator<Scene, CurrentContext> {
		const restCreator = this.restBuilder.build();
		const combinedCreator = new KeepingContextCombinedDrawableCreator(this.creator, restCreator);
		return combinedCreator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateKeepingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(creator);
		const newBuilder = new IntermediateKeepingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<AddingContext>(
		creator: CreatingContextDrawableCreator<Scene, AddingContext>,
	): IntermediateKeepingContextInvalidDrawableCreatorBuilder<Scene, CurrentContext, AddingContext> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(creator);
		const newBuilder = new IntermediateKeepingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
