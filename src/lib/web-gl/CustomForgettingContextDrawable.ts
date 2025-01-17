import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
export class CustomForgettingContextDrawable<Scene, Context>
	implements ForgettingContextDrawable<Scene, Context>
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
	public draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): undefined {
		this.drawer(gl, scene, context);
	}
}
