import type {Initializable} from "./Initializable.ts";
import {WebGlWrapperCreator} from "./WebGlWrapperCreator.ts";
import type {WebGlWrapperCreatorBuilderAbleToBuild} from "./WebGlWrapperCreatorBuilderAbleToBuild.ts";
import type {WebGlWrapperCreatorBuilderAbleToStartConfiguringDrawing} from "./WebGlWrapperCreatorBuilderAbleToStartConfiguringDrawing.ts";
import {WebGlWrapperCreatorDrawingBuilder} from "./WebGlWrapperCreatorFullDrawingBuilder.ts";
export class WebGlWrapperCreatorInitializingBuilder<Scene>
	implements
		WebGlWrapperCreatorBuilderAbleToBuild<Scene>,
		WebGlWrapperCreatorBuilderAbleToStartConfiguringDrawing<Scene>
{
	public startConfiguringDrawing(): WebGlWrapperCreatorDrawingBuilder<Scene> {
		const builder = new WebGlWrapperCreatorDrawingBuilder(this.initializables);
		return builder;
	}
	private initializables: readonly Initializable[];
	public build(): WebGlWrapperCreator<Scene> {
		const creator = new WebGlWrapperCreator(this.initializables, []);
		return creator;
	}
	public constructor() {
		this.initializables = [];
	}
	public add(initializable: Initializable): this {
		this.initializables = [...this.initializables, initializable];
		return this;
	}
}
