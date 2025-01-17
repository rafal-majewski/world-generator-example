import {CreatingContextCombinedDrawableCreator} from "./CreatingContextCombinedDrawableCreator.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {CreatingContextValidDrawableCreatorBuilder} from "./CreatingContextValidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import {IntermediateCreatingContextInvalidDrawableCreatorBuilder} from "./IntermediateCreatingContextInvalidDrawableCreatorBuilder.ts";
import type {WithContextValidDrawableCreatorBuilder} from "./WithContextValidDrawableCreatorBuilder.ts";
export class IntermediateCreatingContextValidDrawableCreatorBuilder<Scene, CurrentContext>
	implements CreatingContextValidDrawableCreatorBuilder<Scene>
{
	private readonly creator: CreatingContextDrawableCreator<Scene, CurrentContext>;
	private readonly restBuilder: WithContextValidDrawableCreatorBuilder<Scene, CurrentContext>;
	public constructor(
		creator: CreatingContextDrawableCreator<Scene, CurrentContext>,
		restBuilder: WithContextValidDrawableCreatorBuilder<Scene, CurrentContext>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public build(): CreatingContextCombinedDrawableCreator<Scene, CurrentContext> {
		const restCreator = this.restBuilder.build();
		const combinedCreator = new CreatingContextCombinedDrawableCreator(this.creator, restCreator);
		return combinedCreator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateCreatingContextValidDrawableCreatorBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(creator);
		const newBuilder = new IntermediateCreatingContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<AddingContext>(
		creator: CreatingContextDrawableCreator<Scene, AddingContext>,
	): IntermediateCreatingContextInvalidDrawableCreatorBuilder<
		Scene,
		CurrentContext,
		AddingContext
	> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(creator);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
