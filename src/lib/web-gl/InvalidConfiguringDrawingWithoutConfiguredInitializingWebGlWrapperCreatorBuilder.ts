import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {InvalidDrawableCreatorBuilder} from "./InvalidDrawableCreatorBuilder.ts";
import {ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder} from "./ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
export class InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<
	Scene,
	FinalContext,
> {
	private readonly drawableCreatorBuilder: InvalidDrawableCreatorBuilder<Scene, FinalContext>;
	public constructor(drawableCreatorBuilder: InvalidDrawableCreatorBuilder<Scene, FinalContext>) {
		this.drawableCreatorBuilder = drawableCreatorBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
		const newBuilderDrawableCreatorBuilder =
			this.drawableCreatorBuilder.addForgettingContext(creator);
		const newBuilder =
			new ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableCreatorBuilder =
			this.drawableCreatorBuilder.addChangingContext(creator);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		FinalContext
	> {
		const newBuilderDrawableCreatorBuilder = this.drawableCreatorBuilder.addKeepingContext(creator);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
}
