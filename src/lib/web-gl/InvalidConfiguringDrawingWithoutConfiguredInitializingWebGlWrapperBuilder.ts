import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {InvalidDrawableBuilder} from "./InvalidDrawableBuilder.ts";
import {ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder} from "./ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder.ts";
export class InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<
	Scene,
	FinalContext,
> {
	private readonly drawableBuilder: InvalidDrawableBuilder<Scene, FinalContext>;
	public constructor(drawableBuilder: InvalidDrawableBuilder<Scene, FinalContext>) {
		this.drawableBuilder = drawableBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<Scene> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addForgettingContext(builder);
		const newBuilder = new ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addChangingContext(builder);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
				newBuilderDrawableBuilder,
			);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		FinalContext
	> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addKeepingContext(builder);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
				newBuilderDrawableBuilder,
			);
		return newBuilder;
	}
}
