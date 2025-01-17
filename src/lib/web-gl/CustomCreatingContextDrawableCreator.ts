import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import {CustomCreatingContextDrawable} from "./CustomCreatingContextDrawable.ts";
export class CustomCreatingContextDrawableCreator<Scene, Context>
	implements CreatingContextDrawableCreator<Scene, Context>
{
	private readonly drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context;
	public constructor(drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context) {
		this.drawer = drawer;
	}
	public create(): CustomCreatingContextDrawable<Scene, Context> {
		const drawable = new CustomCreatingContextDrawable(this.drawer);
		return drawable;
	}
}
