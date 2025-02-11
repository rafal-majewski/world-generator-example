import {CombinedInitializable} from "./CombinedInitializable.ts";
import {EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder} from "./EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder.ts";
import type {Initializable} from "./Initializable.ts";
export class ValidConfiguringInitializingWebGlWrapperBuilder {
	private readonly initializable: Initializable;
	public constructor(initializable: Initializable) {
		this.initializable = initializable;
	}
	public startConfiguringDrawing(): EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder {
		const newBuilder = new EmptyConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
		);
		return newBuilder;
	}
	public add(initializable: Initializable): ValidConfiguringInitializingWebGlWrapperBuilder {
		const newBuilderInitializable = new CombinedInitializable(this.initializable, initializable);
		const newBuilder = new ValidConfiguringInitializingWebGlWrapperBuilder(newBuilderInitializable);
		return newBuilder;
	}
}
