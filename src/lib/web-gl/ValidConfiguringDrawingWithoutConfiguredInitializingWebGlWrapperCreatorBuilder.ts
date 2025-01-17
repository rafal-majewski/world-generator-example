import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder} from "./InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import type {ValidDrawableCreatorBuilder} from "./ValidDrawableCreatorBuilder.ts";
import {WithoutConfiguredInitializingWebGlWrapperCreator} from "./WithoutConfiguredInitializingWebGlWrapperCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
	private readonly drawableCreatorBuilder: ValidDrawableCreatorBuilder<Scene>;
	public constructor(drawableCreatorBuilder: ValidDrawableCreatorBuilder<Scene>) {
		this.drawableCreatorBuilder = drawableCreatorBuilder;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
		const newBuilderDrawableCreatorBuilder = this.drawableCreatorBuilder.addWithoutContext(creator);
		const newBuilder =
			new ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableCreatorBuilder =
			this.drawableCreatorBuilder.addCreatingContext(creator);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public build(): WithoutConfiguredInitializingWebGlWrapperCreator<Scene> {
		const drawableCreator = this.drawableCreatorBuilder.build();
		const wrapperCreator = new WithoutConfiguredInitializingWebGlWrapperCreator(drawableCreator);
		return wrapperCreator;
	}
}
