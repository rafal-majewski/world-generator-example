import {ChangingContextCombinedDrawableCreator} from "./ChangingContextCombinedDrawableCreator.ts";
import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import {CreatingContextCombinedDrawableCreator} from "./CreatingContextCombinedDrawableCreator.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
import type {KeepingContextDrawableCreator} from "./KeepingContextDrawableCreator.ts";
import {WithoutContextWebGlWrapperCreatorDrawingBuilder} from "./WithoutContextWebGlWrapperCreatorDrawingBuilder.ts";
export class WithContextWebGlWrapperCreatorDrawingBuilder<Scene, Context> {
	private readonly initializables: readonly Initializable[];
	private readonly drawableCreator: ForgettingContextDrawableCreator<Scene, Context>;
	public constructor(
		initializables: readonly Initializable[],
		drawableCreator: ForgettingContextDrawableCreator<Scene, Context>,
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
		const builder = new WithContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			combinedCreator,
		);
		return builder;
	}
	public addCreatingContext(
		creator: CreatingContextDrawableCreator<Scene, Context>,
	): WithoutContextWebGlWrapperCreatorDrawingBuilder<Scene> {
		const combinedCreator = new CreatingContextCombinedDrawableCreator(
			creator,
			this.drawableCreator,
		);
		const builder = new WithoutContextWebGlWrapperCreatorDrawingBuilder(
			this.initializables,
			combinedCreator,
		);
		return builder;
	}
	public addKeepingContext(
		creator: KeepingContextDrawableCreator<Scene, Context>,
	): WithContextWebGlWrapperCreatorDrawingBuilder<Scene, Context> {
		const combinedCreator = new ChangingContextCombinedDrawableCreator(
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
