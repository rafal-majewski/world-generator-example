import {WebGlWrapperCreatorInitializingBuilder} from "./WebGlWrapperCreatorInitializingBuilder.ts";
export class WebGlWrapperCreatorBuilder<Scene> {
	public startConfiguringInitializing(): WebGlWrapperCreatorInitializingBuilder<Scene> {
		const initializingBuilder = new WebGlWrapperCreatorInitializingBuilder();
		return initializingBuilder;
	}
	public startConfiguringDrawing(): WebGlWrapperCreatorDrawingBuilder<Scene> {
		const drawingBuilder = new WebGlWrapperCreatorDrawingBuilder([]);
		return drawingBuilder;
	}
}
