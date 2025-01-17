import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {FinalCreatingContextInvalidDrawableCreatorBuilder} from "./FinalCreatingContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateWithoutContextInvalidDrawableCreatorBuilder} from "./IntermediateWithoutContextInvalidDrawableCreatorBuilder.ts";
import {IntermediateWithoutContextValidDrawableCreatorBuilder} from "./IntermediateWithoutContextValidDrawableCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import type {WithoutContextValidDrawableCreatorBuilder} from "./WithoutContextValidDrawableCreatorBuilder.ts";
export class FinalWithoutContextValidDrawableCreatorBuilder<Scene>
	implements WithoutContextValidDrawableCreatorBuilder<Scene>
{
	private readonly creator: WithoutContextDrawableCreator<Scene>;
	public constructor(creator: WithoutContextDrawableCreator<Scene>) {
		this.creator = creator;
	}
	public build(): WithoutContextDrawableCreator<Scene> {
		return this.creator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): IntermediateWithoutContextValidDrawableCreatorBuilder<Scene> {
		const newBuilderRestBuilder = new FinalWithoutContextValidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateWithoutContextValidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<Context>(
		creator: CreatingContextDrawableCreator<Scene, Context>,
	): IntermediateWithoutContextInvalidDrawableCreatorBuilder<Scene, Context> {
		const newBuilderRestBuilder = new FinalCreatingContextInvalidDrawableCreatorBuilder(creator);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableCreatorBuilder(
			this.creator,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
