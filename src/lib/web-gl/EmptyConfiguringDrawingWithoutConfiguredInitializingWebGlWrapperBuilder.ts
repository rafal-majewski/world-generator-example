import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {FinalCreatingContextInvalidDrawableBuilder} from "./FinalCreatingContextInvalidDrawableBuilder.ts";
import {FinalWithoutContextValidDrawableBuilder} from "./FinalWithoutContextValidDrawableBuilder.ts";
import {InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder} from "./InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder.ts";
import {ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder} from "./ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder {
	public addWithoutContext<Scene>(
		builder: WithoutContextDrawableBuilder<Scene>,
	): ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<Scene> {
		const newBuilderDrawableBuilder = new FinalWithoutContextValidDrawableBuilder(builder);
		const newBuilder = new ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<Scene, NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableBuilder = new FinalCreatingContextInvalidDrawableBuilder(builder);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
				newBuilderDrawableBuilder,
			);
		return newBuilder;
	}
}
