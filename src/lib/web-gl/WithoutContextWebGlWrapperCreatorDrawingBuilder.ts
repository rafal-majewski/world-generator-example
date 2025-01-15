import {WithoutContextCombinedDrawableCreator} from "./WithoutContextCombinedDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import {WithContextWebGlWrapperCreatorDrawingBuilder} from "./WithContextWebGlWrapperCreatorDrawingBuilder.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
import {ForgettingContextCombinedDrawableCreator} from "./ForgettingContextCombinedDrawableCreator.ts";
export class WithoutContextWebGlWrapperCreatorDrawingBuilder<Scene> {
	private readonly initializables: readonly Initializable[];
	private readonly drawableCreator: WithoutContextDrawableCreator<Scene>;
	public constructor(
		initializables: readonly Initializable[],
		drawableCreator: WithoutContextDrawableCreator<Scene>,
	) {
		this.initializables = initializables;
		this.drawableCreator = drawableCreator;
	}
	public addWithoutContext(
		creator: WithoutContextDrawableCreator<Scene>,
	): WithoutContextWebGlWrapperCreatorDrawingBuilder<Scene> {
		const combinedCreator = new WithoutContextCombinedDrawableCreator(
			creator,
			this.drawableCreator,
		);
		const builder = new WithoutContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			combinedCreator,
		);
		return builder;
	}
	public addForgettingContext<Context>(
		creator: ForgettingContextDrawableCreator<Scene, Context>,
	): WithContextWebGlWrapperCreatorDrawingBuilder<Scene, Context> {
		const combinedCreator = new ForgettingContextCombinedDrawableCreator(
			creator,
			this.drawableCreator,
		);
		const builder = new WithContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			combinedCreator,
		);
		return builder;
	}
}
