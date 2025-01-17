import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import {InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder} from "./InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import type {ValidDrawableCreatorBuilder} from "./ValidDrawableCreatorBuilder.ts";
import {WithConfiguredInitializingWebGlWrapperCreator} from "./WithConfiguredInitializingWebGlWrapperCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
	private readonly initializable: Initializable;
	private readonly drawableCreatorBuilder: ValidDrawableCreatorBuilder<Scene>;
	public constructor(
		initializable: Initializable,
		drawableCreatorBuilder: ValidDrawableCreatorBuilder<Scene>,
	) {
		this.initializable = initializable;
		this.drawableCreatorBuilder = drawableCreatorBuilder;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
		const newBuilderDrawableCreatorBuilder = this.drawableCreatorBuilder.addWithoutContext(creator);
		const newBuilder =
			new ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableCreatorBuilder =
			this.drawableCreatorBuilder.addCreatingContext(creator);
		const newBuilder =
			new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public build(): WithConfiguredInitializingWebGlWrapperCreator<Scene> {
		const drawableCreator = this.drawableCreatorBuilder.build();
		const creator = new WithConfiguredInitializingWebGlWrapperCreator(
			this.initializable,
			drawableCreator,
		);
		return creator;
	}
}
