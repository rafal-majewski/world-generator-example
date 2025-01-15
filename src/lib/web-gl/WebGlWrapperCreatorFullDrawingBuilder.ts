import type {DrawableCreator} from "./DrawableCreator.ts";
import type {DrawableWithContextCreator} from "./WithContextDrawableCreator.ts";
import {FullWebGlWrapperCreator} from "./WebGlWrapperCreator.ts";
import type {Initializable} from "./Initializable.ts";
import {WebGlWrapperCreator} from "./WebGlWrapperCreator.ts";
import type {WebGlWrapperCreatorDrawingBuilder} from "./WebGlWrapperCreatorDrawingBuilder.ts";
export class WebGlWrapperCreatorFullDrawingBuilder<Scene>
	implements WebGlWrapperCreatorDrawingBuilder<Scene>
{
	private readonly initializables: readonly Initializable[];
	private readonly drawableCreator: DrawableCreator<Scene>;
	public constructor(
		initializables: readonly Initializable[],
		drawableCreator: DrawableCreator<Scene>,
	) {
		this.initializables = initializables;
		this.drawableCreator = drawableCreator;
	}
	public build(): FullWebGlWrapperCreator<Scene> {
		const creator = new FullWebGlWrapperCreator(this.initializables, this.drawableCreator);
		return creator;
	}
	public add(creator: DrawableCreator<Scene>): WebGlWrapperCreatorFullDrawingBuilder<Scene> {
		const newDrawableCreator = this.drawableCreator.append(creator);
		const builder = new WebGlWrapperCreatorFullDrawingBuilder(
			this.initializables,
			newDrawableCreator,
		);
		return builder;
	}
	public addWithContext<Context>(creator: DrawableWithContextCreator<Scene, Context>): this {
		this.drawableCreators = [...this.drawableCreators, creator];
		return this;
	}
}
