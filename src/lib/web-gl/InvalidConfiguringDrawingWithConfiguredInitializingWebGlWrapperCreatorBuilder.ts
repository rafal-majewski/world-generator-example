import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import type {InvalidDrawableCreatorBuilder} from "./InvalidDrawableCreatorBuilder.ts";
import {ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder} from "./ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
export class InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<
	Scene,
	FinalContext,
> {
	private readonly initializable: Initializable;
	private readonly drawableCreatorBuilder: InvalidDrawableCreatorBuilder<Scene, FinalContext>;
	public constructor(
		initializable: Initializable,
		drawableCreatorBuilder: InvalidDrawableCreatorBuilder<Scene, FinalContext>,
	) {
		this.initializable = initializable;
		this.drawableCreatorBuilder = drawableCreatorBuilder;
	}
	public addForgettingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
		const newBuilderDrawableCreatorBuilder =
			this.drawableCreatorBuilder.addForgettingContext(creator);
		const newBuilder =
			new ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		creator: ChangingContextDrawableCreator<Scene, FinalContext, NewFinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableCreatorBuilder =
			this.drawableCreatorBuilder.addChangingContext(creator);
		const newBuilder =
			new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addKeepingContext(
		creator: ForgettingContextDrawableCreator<Scene, FinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		FinalContext
	> {
		const newBuilderDrawableCreatorBuilder = this.drawableCreatorBuilder.addKeepingContext(creator);
		const newBuilder =
			new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
}
