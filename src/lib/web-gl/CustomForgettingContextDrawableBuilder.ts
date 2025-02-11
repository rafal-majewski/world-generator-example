import {CustomForgettingContextDrawable} from "./CustomForgettingContextDrawable.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
export class CustomForgettingContextDrawableBuilder<Scene, Context>
	implements ForgettingContextDrawableBuilder<Scene, Context>
{
	private readonly drawer: (
		gl: WebGL2RenderingContext,
		scene: Scene,
		context: Context,
	) => undefined;
	public constructor(
		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: Context) => undefined,
	) {
		this.drawer = drawer;
	}
	public build(): CustomForgettingContextDrawable<Scene, Context> {
		const drawable = new CustomForgettingContextDrawable(this.drawer);
		return drawable;
	}
}
