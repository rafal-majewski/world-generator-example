import {ChangingContextCombinedDrawableCreator} from "./ChangingContextCombinedDrawableCreator.ts";
import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import type {WithContextDrawableCreator} from "./WithContextDrawableCreator.ts";
export class WithContextWebGlWrapperCreatorDrawingBuilder<Scene, Context> {
	private readonly initializables: readonly Initializable[];
	private readonly drawableCreator: WithContextDrawableCreator<Scene, Context>;
	public constructor(
		initializables: readonly Initializable[],
		drawableCreator: WithContextDrawableCreator<Scene, Context>,
	) {
		this.initializables = initializables;
		this.drawableCreator = drawableCreator;
	}
	public addChangingContext<OldContext>(
		creator: ChangingContextDrawableCreator<Scene, OldContext, Context>,
	): WithContextWebGlWrapperCreatorDrawingBuilder<Scene, OldContext> {
		const combinedCreator = new ChangingContextCombinedDrawableCreator(
			creator,
			this.drawableCreator,
		);
		const builder = new WithContextWebGlWrapperCreatorDrawingBuilder(this.initializables, creator);
		return builder;
	}
	public addCreatingContext(
		creator: CreatingContextDrawableCreator<Scene, Context>,
	): WithoutContextWebGlWrapperCreatorDrawingBuilder<Scene> {
		const 
		const builder = new WithoutContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			creator,
		);
		return builder;
	}
}
