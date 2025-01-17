import {CustomForgettingContextDrawable} from "./CustomForgettingContextDrawable.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
export class CustomForgettingContextDrawableCreator<Scene, Context>
	implements ForgettingContextDrawableCreator<Scene, Context>
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
	public create(): CustomForgettingContextDrawable<Scene, Context> {
		const drawable = new CustomForgettingContextDrawable(this.drawer);
		return drawable;
	}
}
