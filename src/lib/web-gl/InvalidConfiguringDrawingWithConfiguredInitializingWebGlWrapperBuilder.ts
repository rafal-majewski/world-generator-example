import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {Initializable} from "./Initializable.ts";
import type {InvalidDrawableBuilder} from "./InvalidDrawableBuilder.ts";
import {ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder} from "./ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder.ts";
export class InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<
	Scene,
	FinalContext,
> {
	private readonly initializable: Initializable;
	private readonly drawableBuilder: InvalidDrawableBuilder<Scene, FinalContext>;
	public constructor(
		initializable: Initializable,
		drawableBuilder: InvalidDrawableBuilder<Scene, FinalContext>,
	) {
		this.initializable = initializable;
		this.drawableBuilder = drawableBuilder;
	}
	public addForgettingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<Scene> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addForgettingContext(builder);
		const newBuilder = new ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addChangingContext<NewFinalContext>(
		builder: ChangingContextDrawableBuilder<Scene, FinalContext, NewFinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addChangingContext(builder);
		const newBuilder = new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addKeepingContext(
		builder: ForgettingContextDrawableBuilder<Scene, FinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<Scene, FinalContext> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addKeepingContext(builder);
		const newBuilder = new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
}
