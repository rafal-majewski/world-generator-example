import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import type {WithContextWebGlWrapperCreatorDrawingBuilder} from "./WithContextWebGlWrapperCreatorDrawingBuilder.ts";
import type {WithoutContextWebGlWrapperCreatorDrawingBuilder} from "./WithoutContextWebGlWrapperCreatorDrawingBuilder.ts";
export class EmptyWebGlWrapperCreatorDrawingBuilder<Scene> {
	private readonly initializables: readonly Initializable[];
	public constructor(initializables: readonly Initializable[]) {
		this.initializables = initializables;
	}
	public addForgettingContext<Context>(
		creator: ForgettingContextDrawableCreator<Scene, Context>,
	): WithContextWebGlWrapperCreatorDrawingBuilder<Scene> {
		const builder = new WithContextWebGlWrapperCreatorDrawingBuilder(this.initializables, creator);
		return builder;
	}
	public addWithoutContext<Context>(
		creator: WithoutContextDrawableCreatingContext<Scene, Context>,
	): WithoutContextWebGlWrapperCreatorDrawingBuilder<Scene> {
		const builder = new WithoutContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			creator,
		);
		return builder;
	}
}
