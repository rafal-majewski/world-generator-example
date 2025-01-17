import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {FinalCreatingContextInvalidDrawableCreatorBuilder} from "./FinalCreatingContextInvalidDrawableCreatorBuilder.ts";
import {FinalWithoutContextValidDrawableCreatorBuilder} from "./FinalWithoutContextValidDrawableCreatorBuilder.ts";
import type {Initializable} from "./Initializable.ts";
import {InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder} from "./InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import {ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder} from "./ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder {
	private readonly initializable: Initializable;
	public constructor(initializable: Initializable) {
		this.initializable = initializable;
	}
	public addWithoutContext<Scene>(
		creator: WithoutContextDrawableCreator<Scene>,
	): ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
		const newBuilderDrawableCreatorBuilder = new FinalWithoutContextValidDrawableCreatorBuilder(
			creator,
		);
		const newBuilder =
			new ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addCreatingContext<Scene, NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableCreatorBuilder = new FinalCreatingContextInvalidDrawableCreatorBuilder(
			creator,
		);
		const newBuilder =
			new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
}
