import {EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder} from "./EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder.ts";
import {EmptyConfiguringInitializingWebGlWrapperBuilder} from "./EmptyConfiguringInitializingWebGlWrapperBuilder.ts";
export class WebGlWrapperBuilder {
	public startConfiguringInitializing(): EmptyConfiguringInitializingWebGlWrapperBuilder {
		const newBuilder = new EmptyConfiguringInitializingWebGlWrapperBuilder();
		return newBuilder;
	}
	public startConfiguringDrawing(): EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder {
		const newBuilder =
			new EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder();
		return newBuilder;
	}
}
