import {EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder} from "./EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder.ts";
import {EmptyConfiguringInitializingWebGlWrapperCreatorBuilder} from "./EmptyConfiguringInitializingWebGlWrapperCreatorBuilder.ts";
export class WebGlWrapperCreatorBuilder {
	public startConfiguringInitializing(): EmptyConfiguringInitializingWebGlWrapperCreatorBuilder {
		const newBuilder = new EmptyConfiguringInitializingWebGlWrapperCreatorBuilder();
		return newBuilder;
	}
	public startConfiguringDrawing(): EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder {
		const newBuilder =
			new EmptyConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperCreatorBuilder();
		return newBuilder;
	}
}
