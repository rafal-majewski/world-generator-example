import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {WithoutContextValidDrawableCreatorBuilder} from "./WithoutContextValidDrawableCreatorBuilder.ts";
import {WithoutContextCombinedDrawableCreator} from "./WithoutContextCombinedDrawableCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import {IntermediateWithoutContextInvalidDrawableCreatorBuilder} from "./IntermediateWithoutContextInvalidDrawableCreatorBuilder.ts";
export class IntermediateWithoutContextValidDrawableCreatorBuilder<Scene>
	implements WithoutContextValidDrawableCreatorBuilder<Scene>
{
	private readonly creator: WithoutContextDrawableCreator<Scene>;
	private readonly restBuilder: WithoutContextValidDrawableCreatorBuilder<Scene>;
	public constructor(
		creator: WithoutContextDrawableCreator<Scene>,
		restBuilder: WithoutContextValidDrawableCreatorBuilder<Scene>,
	) {
		this.creator = creator;
		this.restBuilder = restBuilder;
	}
	public build(): WithoutContextCombinedDrawableCreator<Scene> {
		const restCreator = this.restBuilder.build();
		const combinedCreator = new WithoutContextCombinedDrawableCreator(this.creator, restCreator);
		return combinedCreator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateWithoutContextValidDrawableCreatorBuilder<Scene> {
		const newRestBuilder = this.restBuilder.addWithoutContext(creator);
		const newBuilder = new IntermediateWithoutContextValidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<Context>(
		creator: CreatingContextDrawableCreator<Scene, Context>,
	): IntermediateWithoutContextInvalidDrawableCreatorBuilder<Scene, Context> {
		const newRestBuilder = this.restBuilder.addCreatingContext(creator);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableCreatorBuilder(
			this.creator,
			newRestBuilder,
		);
		return newBuilder;
	}
}
