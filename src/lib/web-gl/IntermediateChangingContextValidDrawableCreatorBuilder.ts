import {ChangingContextCombinedDrawableCreator} from "./ChangingContextCombinedDrawableCreator.ts";
import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ChangingContextValidDrawableCreatorBuilder} from "./ChangingContextValidDrawableCreatorBuilder.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {IntermediateChangingContextInvalidDrawableCreatorBuilder} from "./IntermediateChangingContextInvalidDrawableCreatorBuilder.ts";
import type {WithContextValidDrawableCreatorBuilder} from "./WithContextValidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class IntermediateChangingContextValidDrawableCreatorBuilder<Scene, OldContext, NewContext>
	implements ChangingContextValidDrawableCreatorBuilder<Scene, OldContext>
{
	private readonly creator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>;
	private readonly restBuilder: WithContextValidDrawableCreatorBuilder<Scene, NewContext>;
	public constructor(
		creator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>,
		restBuilder: WithContextValidDrawableCreatorBuilder<Scene, NewContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public build(): ChangingContextCombinedDrawableCreator<Scene, OldContext, NewContext> {
		const restCreator = this.restBuilder.build();
		const combinedCreator = new ChangingContextCombinedDrawableCreator(this.creator, restCreator);
		return combinedCreator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateChangingContextValidDrawableCreatorBuilder<Scene, OldContext, NewContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(creator);
		const newBuilder = new IntermediateChangingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): IntermediateChangingContextInvalidDrawableCreatorBuilder<
		Scene,
		OldContext,
		NewContext,
		NewFinalContext
	> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(creator);
		const newBuilder = new IntermediateChangingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
