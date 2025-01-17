import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {FinalCreatingContextInvalidDrawableCreatorBuilder} from "./FinalCreatingContextInvalidDrawableCreatorBuilder.ts";
import {FinalWithoutContextValidDrawableCreatorBuilder} from "./FinalWithoutContextValidDrawableCreatorBuilder.ts";
import {InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder} from "./InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import {ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder} from "./ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder {
	public addWithoutContext<Scene>(
		creator: WithoutContextDrawableCreator<Scene>,
	): ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<Scene> {
		const newBuilderDrawableCreatorBuilder = new FinalWithoutContextValidDrawableCreatorBuilder(
			creator,
		);
		const newBuilder =
			new ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
	public addCreatingContext<Scene, NewFinalContext>(
		creator: CreatingContextDrawableCreator<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableCreatorBuilder = new FinalCreatingContextInvalidDrawableCreatorBuilder(
			creator,
		);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder(
				newBuilderDrawableCreatorBuilder,
			);
		return newBuilder;
	}
}
