import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {CustomCreatingContextDrawable} from "./CustomCreatingContextDrawable.ts";
export class CustomCreatingContextDrawableBuilder<Scene, Context>
	implements CreatingContextDrawableBuilder<Scene, Context>
{
	private readonly drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context;
	public constructor(drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context) {
		this.drawer = drawer;
	}
	public build(): CustomCreatingContextDrawable<Scene, Context> {
		const drawable = new CustomCreatingContextDrawable(this.drawer);
		return drawable;
	}
}
