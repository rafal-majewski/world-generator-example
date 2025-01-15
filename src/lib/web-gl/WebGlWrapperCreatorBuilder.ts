import {EmptyWebGlWrapperCreatorDrawingBuilder} from "./EmptyWebGlWrapperCreatorDrawingBuilder.ts";
import {WebGlWrapperCreatorInitializingBuilder} from "./WebGlWrapperCreatorInitializingBuilder.ts";
export class WebGlWrapperCreatorBuilder<Scene> {
	public startConfiguringInitializing(): WebGlWrapperCreatorInitializingBuilder<Scene> {
		const initializingBuilder = new WebGlWrapperCreatorInitializingBuilder([]);
		return initializingBuilder;
	}
	public startConfiguringDrawing(): EmptyWebGlWrapperCreatorDrawingBuilder<Scene> {
		const drawingBuilder = new EmptyWebGlWrapperCreatorDrawingBuilder([]);
		return drawingBuilder;
	}
}
