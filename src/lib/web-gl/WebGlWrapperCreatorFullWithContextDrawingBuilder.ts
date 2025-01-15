import type {DrawableCreator} from "./DrawableCreator.ts";
import type {WithContextDrawableCreator} from "./WithContextDrawableCreator.ts";
import type {Initializable} from "./Initializable.ts";
export class WebGlWrapperCreatorFullWithContextDrawingBuilder<Scene, Context> {
	private readonly initializables: readonly Initializable[];
	private readonly drawableCreator: WithContextDrawableCreator<Scene, Context>;
	public constructor(
		initializables: readonly Initializable[],
		drawableCreator: WithContextDrawableCreator<Scene, Context>,
	) {
		this.initializables = initializables;
		this.drawableCreator = drawableCreator;
	}
	public build(): WebGlWrapperCreator<Scene> {
		const creator = new WebGlWrapperCreator(this.initializables, this.drawableCreators);
		return creator;
	}
	public addKeepingContext(
		creator: KeepingContextDrawableCreator<Scene, Context>,
	): WebGlWrapperCreatorFullWithContextDrawingBuilder<Scene, Context> {
		const newDrawableCreator = this.drawableCreator.append(creator);
		const newBuilder = new WebGlWrapperCreatorFullWithContextDrawingBuilder(
			this.initializables,
			newDrawableCreator,
		);
		return newBuilder;
	}
	public addWithContext<Context>(creator: DrawableWithContextCreator<Scene, Context>): this {
		this.drawableCreators = [...this.drawableCreators, creator];
		return this;
	}
}
