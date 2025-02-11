import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {FinalCreatingContextInvalidDrawableBuilder} from "./FinalCreatingContextInvalidDrawableBuilder.ts";
import type {FinalizedProgramWrapperBuilder} from "./FinalizedProgramWrapperBuilder.ts";
import {FinalWithoutContextValidDrawableBuilder} from "./FinalWithoutContextValidDrawableBuilder.ts";
import type {Initializable} from "./Initializable.ts";
import {InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder} from "./InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder.ts";
import {ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder} from "./ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder.ts";
export class EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder {
	private readonly initializable: Initializable;
	public constructor(initializable: Initializable) {
		this.initializable = initializable;
	}
	public addWithoutContext<Scene, Vertex>(
		builder: FinalizedProgramWrapperBuilder<Scene, Vertex>,
	): ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<Scene> {
		const newBuilderDrawableBuilder = new FinalWithoutContextValidDrawableBuilder(builder);
		const newBuilder = new ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<Scene, NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableBuilder = new FinalCreatingContextInvalidDrawableBuilder(builder);
		const newBuilder = new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
}
