import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import {WithContextWebGlWrapperCreatorDrawingBuilder} from "./WithContextWebGlWrapperCreatorDrawingBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import {WithoutContextWebGlWrapperCreatorDrawingBuilder} from "./WithoutContextWebGlWrapperCreatorDrawingBuilder.ts";
export class EmptyWebGlWrapperCreatorDrawingBuilder<Scene> {
	private readonly initializables: readonly Initializable[];
	public constructor(initializables: readonly Initializable[]) {
		this.initializables = initializables;
	}
	public addForgettingContext<Context>(
		creator: ForgettingContextDrawableCreator<Scene, Context>,
	): WithContextWebGlWrapperCreatorDrawingBuilder<Scene, Context> {
		const builder = new WithContextWebGlWrapperCreatorDrawingBuilder(this.initializables, creator);
		return builder;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): WithoutContextWebGlWrapperCreatorDrawingBuilder<Scene> {
		const builder = new WithoutContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			creator,
		);
		return builder;
	}
}
