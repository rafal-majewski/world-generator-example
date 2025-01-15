import {EmptyWebGlWrapperCreatorDrawingBuilder} from "./EmptyWebGlWrapperCreatorDrawingBuilder.ts";
import type {Initializable} from "./Initializable.ts";
export class WebGlWrapperCreatorInitializingBuilder<Scene> {
	public startConfiguringDrawing(): EmptyWebGlWrapperCreatorDrawingBuilder<Scene> {
		const builder = new EmptyWebGlWrapperCreatorDrawingBuilder(this.initializables);
		return builder;
	}
	private readonly initializables: readonly Initializable[];
	public constructor(initializables: readonly Initializable[]) {
		this.initializables = initializables;
	}
	public add(initializable: Initializable): WebGlWrapperCreatorInitializingBuilder<Scene> {
		const newInitializables = [...this.initializables, initializable];
		const builder = new WebGlWrapperCreatorInitializingBuilder(newInitializables);
		return builder;
	}
}
