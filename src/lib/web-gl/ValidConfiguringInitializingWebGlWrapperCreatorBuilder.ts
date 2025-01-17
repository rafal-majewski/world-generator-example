import {CombinedInitializable} from "./CombinedInitializable.ts";
import {EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder} from "./EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import type {Initializable} from "./Initializable.ts";
export class ValidConfiguringInitializingWebGlWrapperCreatorBuilder {
	private readonly initializable: Initializable;
	public constructor(initializable: Initializable) {
		this.initializable = initializable;
	}
	public startConfiguringDrawing(): EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder {
		const newBuilder =
			new EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperCreatorBuilder(
				this.initializable,
			);
		return newBuilder;
	}
	public add(initializable: Initializable): ValidConfiguringInitializingWebGlWrapperCreatorBuilder {
		const newBuilderInitializable = new CombinedInitializable(this.initializable, initializable);
		const newBuilder = new ValidConfiguringInitializingWebGlWrapperCreatorBuilder(
			newBuilderInitializable,
		);
		return newBuilder;
	}
}
